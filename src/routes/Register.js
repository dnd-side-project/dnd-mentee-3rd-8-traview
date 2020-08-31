import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { useStateValue } from '../StateProvider';

import { BackgroundBox } from '../components/CommonStyle/BackgroundBox';
import { InputBar } from '../components/CommonStyle/InputBar';
import { MainTheme } from '../components/CommonStyle/MainTheme';
import { SignUpLabel } from '../components/CommonStyle/SignUpLabel';
import { SocialBox } from '../components/CommonStyle/SocialBox';
import { SocialFont } from '../components/CommonStyle/SocialFont';
import { SocialImage } from '../components/CommonStyle/SocialImage';
import { SubmittBtn } from '../components/CommonStyle/SubmittBtn';
import { TopLabel } from '../components/CommonStyle/TopLabel';
import { SocialCollection } from '../components/CommonStyle/SocialCollection';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Register() {
    const [, dispatch] = useStateValue();
    const [NickName, setNickName] = useState('');
    const [Email, setEmail] = useState('');
    const [UserId, setUserId] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();

    const onSignUpHandler = (event) => {
        event.preventDefault();
    };

    const googleSignIn = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                history.push('/');
            })
            .catch((error) => alert(error.message));
    };

    const facebookSignIn = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                history.push('/');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <MainTheme bg={'/images/RegistalBackground.png'}>
            <div
                style={{
                    overflow: 'hidden',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <KeyboardBackspaceIcon
                    onClick={() => {
                        history.goBack();
                    }}
                    fontSize="large"
                    style={{
                        position: 'absolute',
                        paddingTop: '75px',
                        marginLeft: '75px',
                        display: 'flex',
                        cursor: 'pointer',
                        width: '50px',
                        height: '50px',
                        textAlign: 'left',
                        color: 'white',
                    }}
                />
                <TopLabel style={{ marginBottom: '1.5%' }}>
                    나만 몰랐던 국내 여행지
                </TopLabel>
                <SignUpLabel style={{ marginBottom: '3%' }}>
                    <img
                        style={{ marginRight: '30px' }}
                        src="/images/Logo.png"
                        alt="Logo"
                    />
                    &nbsp;회원가입
                </SignUpLabel>

                <BackgroundBox style={{ marginTop: '-2%' }}>
                    {/*소셜 로그인 박스*/}
                    <SocialCollection
                        style={{
                            marginBottom: '-20px',
                        }}
                    >
                        <SocialBox>
                            <SocialImage bg={'/images/kakao.png'} />
                            <SocialFont>
                                카카오 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox>
                            <SocialImage bg={'/images/naver.png'} />
                            <SocialFont>
                                네이버 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox onClick={facebookSignIn}>
                            <SocialImage
                                style={{
                                    background: ' #3B5998',
                                    borderRadius: '35px',
                                }}
                            >
                                <img
                                    src="/images/facebook.png"
                                    alt="Facebook"
                                />
                            </SocialImage>
                            <SocialFont>
                                페이스북 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox onClick={googleSignIn}>
                            <SocialImage
                                bg={'/images/google.png'}
                                alt="Google"
                            />
                            <SocialFont>
                                구글 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                    </SocialCollection>
                    {/*inputBox Div*/}

                    <form
                        onSubmit={onSignUpHandler}
                        style={{
                            height: '70%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                        }}
                    >
                        <InputBar
                            placeholder="닉네임"
                            type="text"
                            value={NickName}
                            onChange={(e) => setNickName(e.currentTarget.value)}
                        />
                        <InputBar
                            placeholder="이메일주소"
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <InputBar
                            placeholder="아이디"
                            type="text"
                            value={UserId}
                            onChange={(e) => setUserId(e.currentTarget.value)}
                        />
                        <InputBar
                            placeholder="비밀번호"
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <SubmittBtn onClick={onSignUpHandler}>
                            Traview 시작하기
                        </SubmittBtn>
                    </form>
                </BackgroundBox>
            </div>
        </MainTheme>
    );
}
export default Register;
