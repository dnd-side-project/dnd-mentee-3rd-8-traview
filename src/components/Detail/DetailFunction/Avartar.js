import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
const FollowerAvatar = styled.img`
    &: hover {
        transform: scale(1.3);
    }
`;
function Avartar(props) {
    const history = useHistory();
    const [detailuser, setDetailUser] = useState(null);
    useEffect(() => {
        db.collection('users')
            .doc(props.uid)
            .get()
            .then((doc) => {
                setDetailUser(doc.data().photoURL);
            });
    }, []);
    if (props.Type === 'Detail') {
        return (
            <img
                style={{
                    cursor: 'pointer',
                    width: '70px',
                    height: '70px',
                    borderRadius: '40px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                    border: '1px solid #F534B',
                    boxSizing: 'border-box',
                    marginRight: '9px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'Best') {
        return (
            <img
                style={{
                    cursor: 'pointer',
                    width: '28px',
                    height: '28px',
                    borderRadius: '14px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'MainArea') {
        return (
            <img
                style={{
                    cursor: 'pointer',
                    width: '44px',
                    height: '44px',
                    borderRadius: '22px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'comment') {
        return (
            <img
                style={{
                    cursor: 'pointer',
                    borderRadius: '20px',
                    width: '40px',
                    height: '40px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    marginRight: '20px',
                }}
                src={detailuser}
                alt=""
            />
        );
    } else if (props.Type === 'Follower') {
        return (
            <a href={`/FriendsPage/${props.uid}`}>
                <FollowerAvatar
                    style={{
                        cursor: 'pointer',
                        borderRadius: '80px',
                        width: '130px',
                        height: '130px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        border: '2px solid #E44E47',
                        boxSizing: 'border-box',
                        marginRight: '50px',
                    }}
                    src={detailuser}
                    alt=""
                />
            </a>
        );
    }
}

export default Avartar;
