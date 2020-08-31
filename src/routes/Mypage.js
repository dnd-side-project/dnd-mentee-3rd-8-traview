import React, { useEffect } from 'react';
import styled from 'styled-components';
import Mypost from '../components/Mypage/Mypost';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
const Container = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 14px;
    margin-top: -20px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 787px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 100) 0,
            rgba(25, 25, 25, 0) 20%,
            rgba(25, 25, 25, 0) 20%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 50) 100%
        ),
        url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

function Mypage() {
    const [{ user }] = useStateValue();
    const [userInfo, setUserInfo] = useStateValue('');
    useEffect(() => {
        db.collection('users')
            .doc(user.uid)
            .get()
            .then((doc) => {
                setUserInfo(doc);
            });
    }, []);

    // {console.log(userInfo)}
    // {console.log(userInfo.user.background)} 배경
    // {console.log(userInfo.user.displayName)} 이름
    // {console.log(userInfo.user.email)} 이메일
    // {console.log(userInfo.user.introduction)} 소개
    // {console.log(userInfo.user.photoURL)} 아바타타{' '}
    return (
        <>
            <Container>
                <BackgroundImage bg={userInfo.user.background} />
            </Container>
            <Mypost />
        </>
    );
}

export default Mypage;
