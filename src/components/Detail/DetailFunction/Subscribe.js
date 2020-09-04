import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import db from '../../../firebase';
const useStyles = makeStyles((theme) => ({
    FollowBtn: {
        color: '#FFFFFF',
        border: '2px solid #FF534B',
        height: '24px',
        width: '55px',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '19px',
        display: 'flex',
        boxSizing: 'border-box',
        borderRadius: '16px',
        marginTop: '10px',
        background: 'black',
    },
}));
//{user.displayName} 지금 유저이름
//{prop.userTo} post 유저이름
function Subscribe(props) {
    const classes = useStyles();
    const [{ user }] = useStateValue();
    const [subscribed, setSubscribed] = useState(false);
    const [SubscribeNumber, setSubscribeNumber] = useState(0);
    useEffect(() => {
        db.collection('subscribe')
            .where('userTo', '==', props.userTo)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    setSubscribeNumber(0);
                } else {
                    setSubscribeNumber(doc.size);
                }
            });
        {
            user &&
                user.uid &&
                db
                    .collection('subscribe')
                    .where('userTo', '==', props.userTo)
                    .where('userFrom', '==', user.uid)
                    .onSnapshot((snapshot) => {
                        if (snapshot.empty) {
                            setSubscribed(false);
                        } else {
                            setSubscribed(true);
                        }
                    });
        }
    }, []);
    const onSubscribe = () => {
        if (subscribed) {
            let collectionRef = db.collection('subscribe');
            collectionRef
                .where('userTo', '==', props.userTo)
                .where('userFrom', '==', user.uid)
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        doc.ref
                            .delete()
                            .then(() => {
                                console.log('delete success');
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
            setSubscribed(false);
        } else {
            //이미 구독중이 아니라면
            db.collection('subscribe').add({
                userTo: props.userTo,
                userFrom: user.uid,
            });
            setSubscribed(true);
        }
        db.collection('subscribe')
            .where('userTo', '==', props.userTo)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    setSubscribeNumber(0);
                } else {
                    setSubscribeNumber(doc.size);
                }
            });
    };
    return (
        <>
            <p
                style={{
                    fontWeight: 300,
                    fontSize: '12px',
                    lineHeight: '17px',
                }}
            >
                팔로워 {SubscribeNumber}
            </p>
            {user && user.uid && user.uid !== props.userTo && (
                <Button
                    className={classes.FollowBtn}
                    onClick={onSubscribe}
                    style={{
                        backgroundColor: `${
                            subscribed ? '#ff534b' : '#000000'
                        }`,
                    }}
                >
                    {subscribed ? '팔로잉' : '팔로우'}
                </Button>
            )}
        </>
    );
}

export default Subscribe;
