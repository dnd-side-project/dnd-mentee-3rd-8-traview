import React, { useState } from 'react';
import styled from 'styled-components';

const MainThema = styled.div`
    overflow: hidden;
    text-align: center;
    font-weight: 300;
    color: #ffffff;
    font-family: Noto Sans KR;
    font-style: normal;
    margin: auto;
`;

const TopLabel = styled.h2`
    margin-top: 7%;
    font-weight: 300;
    font-size: 40px;
    line-height: 58px;
    color: #ffffff;
`;
const SignUpLabel = styled.h2`
    font-size: 60px;
    line-height: 87px;
    font-weight: bold;
    margin-bottom: 5%;
`;
const BackgroundBox = styled.div`
    width: 774px;
    height: 617px;
    background: rgba(51, 51, 51, 0.7);
    backdrop-filter: blur(2.71828px);
    border-radius: 20px;
    margin: 0 auto;
`;
const SocialBox = styled.div`
    margin-top: 5%;
    cursor: pointer;
`;

const SocialImage = styled.div`
    width: 68px;
    height: 68px;
    margin: 0px auto;
`;
const SocialFont = styled.p`
    margin-top: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    letter-spacing: -1px;
`;

const InputBar = styled.input`
    border: 2px solid #ff534b;
    box-sizing: border-box;
    border-radius: 29.5px;
    height: 14%;
    width: 75%;
    margin: 0 auto;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    align-items: center;
    padding-left: 5%;
    letter-spacing: -1.25px;
`;
const StartBtn = styled.button`
    margin: 0 auto;
    width: 75%;
    align-items: center;
    text-align: center;
    border: 2px solid #ff534b;
    background: #ff534b;
    box-sizing: border-box;
    border-radius: 29.5px;
    height: 14%;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -1.375px;
    color: #ffffff;
    &:hover {
        border: 2px solid #50bcdf;
    }
    cursor: pointer;
`;

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
        <MainThema
            style={{
                width: '1440px',
                height: '1024px',
                backgroundImage: `url("/images/RegistalBackground.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                style={{
                    overflow: 'hidden',
                    width: '1440px',
                    height: '1024px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <TopLabel>나만 몰랐던 국내 여행지</TopLabel>
                <SignUpLabel>
                    <span style={{ color: 'red' }}>Traview</span>
                    <span> </span>
                    회원가입
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
                                <img src="/images/kakao.png" alt="kakao" />
                            </SocialImage>
                            <SocialFont>
                                카카오 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox>
                            <SocialImage>
                                <img src="/images/naver.png" alt="kakao" />
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
                                <img src="/images/facebook.png" alt="kakao" />
                            </SocialImage>
                            <SocialFont>
                                페이스북 아이디로
                                <br /> 로그인하기
                            </SocialFont>
                        </SocialBox>
                        <SocialBox>
                            <SocialImage>
                                <img src="/images/google.png" alt="kakao" />
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
                        <StartBtn onClick={onSignUpHandler}>
                            Traview 시작하기
                        </StartBtn>
                    </form>
                </BackgroundBox>
            </div>
        </MainThema>
    );
}
export default Register;
