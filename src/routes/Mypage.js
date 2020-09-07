import React, { useState } from 'react';
import styled from 'styled-components';
import Mypost from '../components/Mypage/Mypost';
import { useStateValue } from '../StateProvider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Edit from '../components/Mypage/Edit';
const useStyles = makeStyles((theme) => ({
    Edit: {
        width: '75px',
        height: '46px',
        border: '1px solid #FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '25.5px',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '35px',
        letterSpacing: '-0.48px',
        color: '#FFFFFF',
    },
}));
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
const Username = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
    margin-top: 12px;
    margin-bottom: 20px;
`;
const IntroductionFont = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    text-align: left;
    letter-spacing: -0.48px;
    color: #ffffff;
`;
function Mypage() {
    const classes = useStyles();
    const [{ user }] = useStateValue();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const onClose = () => {
        setIsEditModalOpen(false);
    };
    const [isAvartar, setIsAvartar] = useState(user.photoURL);
    const [isBackground, setIsBackground] = useState(user.background);
    const [isIntroduction, setIsIntroduction] = useState(user.introduction);
    return (
        <div>
            <Edit
                open={isEditModalOpen}
                close={onClose}
                isIntroduction={isIntroduction} //소개
                isBackground={isBackground} //백그라운드
                isAvartar={isAvartar} //아바타      isIntroduction={isIntroduction} //소개
                setIsIntroduction={setIsIntroduction} //소개
                setIsBackground={setIsBackground} //백그라운드
                setIsAvartar={setIsAvartar} //아바타      isIntroduction={isIntroduction} //소개
            />
            <Container>
                <BackgroundImage bg={isBackground} />
            </Container>
            <div
                style={{
                    display: 'flex',
                    marginLeft: '10%',
                    marginTop: '-5%',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        width: '200px',
                        height: 'auto',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Avatar
                        src={isAvartar}
                        alt={user.displayName}
                        style={{
                            width: '200px',
                            height: '200px',
                            border: '2px solid #E44E47',
                            boxSizing: 'border-box',
                        }}
                    />
                    {/*// <AvatarBox bg={userInfo.user.photoURL} />*/}
                    <Username>{user.displayName}</Username>
                    <Button
                        className={classes.Edit}
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        편집
                    </Button>
                </div>
                <div
                    style={{
                        display: 'flex',
                        maxWidth: '380px',
                        alignItems: 'center',
                        marginLeft: '65px',
                    }}
                >
                    <div>
                        <IntroductionFont>내 소개</IntroductionFont>
                        <IntroductionFont
                            style={{
                                marginTop: '20px',
                                wordBreak: 'break-all',
                                fontWeight: '300',
                            }}
                        >
                            {isIntroduction}
                        </IntroductionFont>
                    </div>
                </div>
            </div>
            <Mypost displayName={user.displayName} uid={user.uid} />
        </div>
    );
}
export default Mypage;
