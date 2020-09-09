import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../../StateProvider';
import db from '../../../firebase';
const TextBox = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.32px;
`;
function LikeInterest(props) {
    const [{ user }] = useStateValue();
    const [likeCount, setLikeCount] = useState(0); //좋아요 수
    const [liked, setLiked] = useState(false); //좋아요 상태
    const [interstCount, setInterstCount] = useState(0); //신기해요 수
    const [interested, setInterested] = useState(false); //신기해요 상태
    useEffect(() => {
        //포스트 별좋아요 수를 나타낸다
        db.collection('Like_Inter')
            .where('postId', '==', props.postId)
            .where('type', '==', 'Like')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    setLikeCount(0);
                } else {
                    setLikeCount(doc.size);
                }
            });

        user &&
            user.uid &&
            db
                .collection('Like_Inter')
                .where('postId', '==', props.postId)
                .where('user', '==', user.uid)
                .where('type', '==', 'Like')
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setLiked(false);
                    } else {
                        setLiked(true);
                    }
                });
    }, []);
    useEffect(() => {
        //포스트 별좋아요 수를 나타낸다
        db.collection('Like_Inter')
            .where('postId', '==', props.postId)
            .where('type', '==', 'Interest')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    setInterstCount(0);
                } else {
                    setInterstCount(doc.size);
                }
            });

        user &&
            user.uid &&
            db
                .collection('Like_Inter')
                .where('postId', '==', props.postId)
                .where('user', '==', user.uid)
                .where('type', '==', 'Interest')
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setInterested(false);
                    } else {
                        setInterested(true);
                    }
                });
    }, []);
    const onHandleLike = () => {
        if (liked) {
            let collectionRef = db.collection('Like_Inter');
            collectionRef
                .where('postId', '==', props.postId)
                .where('user', '==', user.uid)
                .where('type', '==', 'Like')
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        doc.ref
                            .delete()
                            .then(() => {
                                // console.log('delete success');
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
            setLiked(false);
        } else {
            //이미 구독중이 아니라면
            db.collection('Like_Inter').add({
                postId: props.postId,
                user: user.uid,
                type: 'Like',
            });
            setLiked(true);
        }
        db.collection('Like_Inter')
            .where('postId', '==', props.postId)
            .where('type', '==', 'Like')

            .get()
            .then((doc) => {
                if (doc.empty) {
                    setLikeCount(0);
                } else {
                    setLikeCount(doc.size);
                }
            });
    };
    ///////////////////////////////////////////////
    const onHandleInterest = () => {
        if (interested) {
            let collectionRef = db.collection('Like_Inter');
            collectionRef
                .where('postId', '==', props.postId)
                .where('user', '==', user.uid)
                .where('type', '==', 'Interest')
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        doc.ref
                            .delete()
                            .then(() => {
                                // console.log('delete success');
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
            setInterested(false);
        } else {
            //이미 구독중이 아니라면
            db.collection('Like_Inter').add({
                postId: props.postId,
                user: user.uid,
                type: 'Interest',
            });
            setInterested(true);
        }
        db.collection('Like_Inter')
            .where('postId', '==', props.postId)
            .where('type', '==', 'Interest')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    setInterstCount(0);
                } else {
                    setInterstCount(doc.size);
                }
            });
    };
    return (
        <div
            style={{
                position: 'absolute',
                top: props.Type === 'small' ? '1%' : '15px',
                right: props.Type === 'small' ? '3%' : '12px',
                display: ' flex',
                alignItems: 'center',
            }}
        >
            <img
                onClick={
                    //로그인 안됬을떄는클릭시 아무일도 안생기도록하였습니다
                    user &&
                    user.uid &&
                    props.Type !== 'small' &&
                    onHandleInterest
                }
                style={{
                    marginRight: '4px',
                    cursor: 'pointer',
                    width: props.Type === 'small' ? '20px' : '',
                    height: props.Type === 'small' ? '20px' : '',
                }}
                src={
                    //로그인 안될있을경우는 꽉찬 모양에 버튼으로 나오도록하였습니다.
                    user
                        ? `${
                              interested
                                  ? '/images/Detail/Interesting.png'
                                  : '/images/Detail/ex_Interstring.png'
                          }`
                        : '/images/Detail/Interesting.png'
                }
                alt=""
            />

            <TextBox>{interstCount}</TextBox>
            <img
                onClick={
                    user && user.uid && props.Type !== 'small' && onHandleLike
                }
                style={{
                    width: props.Type === 'small' ? '20px' : '',
                    height: props.Type === 'small' ? '20px' : '',
                    marginRight: '4px',
                    marginLeft: '14px',
                    cursor: 'pointer',
                }}
                src={
                    user
                        ? `${
                              liked
                                  ? '/images/Detail/like.png'
                                  : '/images/Detail/ex_like.png'
                          }`
                        : '/images/Detail/like.png'
                }
                //src="/images/like.png"
                alt=""
            />
            <TextBox>{likeCount}</TextBox>
        </div>
    );
}

export default LikeInterest;
