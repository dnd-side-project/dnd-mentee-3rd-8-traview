import React, { useState } from 'react';
import { BackgroundBox } from '../components/CommonStyle/BackgroundBox';
import { InputBar } from '../components/CommonStyle/InputBar';
import { MainTheme } from '../components/CommonStyle/MainTheme';
import { SignUpLabel } from '../components/CommonStyle/SignUpLabel';
import { SocialBox } from '../components/CommonStyle/SocialBox';
import { SocialFont } from '../components/CommonStyle/SocialFont';
import { SocialImage } from '../components/CommonStyle/SocialImage';
import { SubmittBtn } from '../components/CommonStyle/SubmittBtn';
import { TopLabel } from '../components/CommonStyle/TopLabel';

function Register() {
    const [NickName, setNickName] = useState('');
    const [Email, setEmail] = useState(''); //state
    const [UserId, setUserId] = useState('');
    const [Password, setPassword] = useState(''); //state
    const onNickNameHandler = (event) => {
        setNickName(event.currentTarget.value);
    };
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onUserIdHandler = (event) => {
        setUserId(event.currentTarget.value);
    };
    const onSignUpHandler = (event) => {
        event.preventDefault();
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
                <TopLabel>나만 몰랐던 국내 여행지</TopLabel>
                <SignUpLabel>
                    <span style={{ color: 'red' }}>Traview</span>
                    &nbsp;회원가입
                </SignUpLabel>

                <BackgroundBox>
                    {/*소셜 로그인 박스*/}
                    <div
                        style={{
                            margin: '0 auto',
                            width: '88%',
                            height: '30%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            position: 'relative',
                            marginBottom: '-20px',
                        }}
                    >
                        <SocialBox>
                            <SocialImage>
                                <img src="/images/kakao.png" alt="Kakao" />
                            </SocialImage>
                            <SocialFont>
                                카카오 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox>
                            <SocialImage>
                                <img src="/images/naver.png" alt="Naver" />
                            </SocialImage>
                            <SocialFont>
                                네이버 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox>
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
                        <SocialBox>
                            <SocialImage>
                                <img src="/images/google.png" alt="Google" />
                            </SocialImage>
                            <SocialFont>
                                구글 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                    </div>
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
                            onChange={onNickNameHandler}
                        />
                        <InputBar
                            placeholder="이메일주소"
                            type="email"
                            value={Email}
                            onChange={onEmailHandler}
                        />
                        <InputBar
                            placeholder="아이디"
                            type="text"
                            value={UserId}
                            onChange={onUserIdHandler}
                        />
                        <InputBar
                            placeholder="비밀번호"
                            type="password"
                            value={Password}
                            onChange={onPasswordHandler}
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
