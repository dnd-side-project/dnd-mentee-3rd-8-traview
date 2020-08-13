import React, { useState } from 'react';
import { BackgroundBox } from '../components/ButtonStyle/BackgroundBox';
import { InputBar } from '../components/ButtonStyle/InputBar';
import { MainTheme } from '../components/ButtonStyle/MainTheme';
import { SignUpLabel } from '../components/ButtonStyle/SignUpLabel';
import { SocialBox } from '../components/ButtonStyle/SocialBox';
import { SocialFont } from '../components/ButtonStyle/SocialFont';
import { SocialImage } from '../components/ButtonStyle/SocialImage';
import { SubmittBtn } from '../components/ButtonStyle/SubmittBtn';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginLabel = styled.div`
    margin-top: -4%;
    font-weight: 300;
    font-size: 30px;
    line-height: 43px;
    color: #ffffff;
`;
const IDCheckLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 87%;
    margin-top: -2%;
    letter-spacing: -1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
`;

function Login() {
    const [ID, setID] = useState('');
    const [Password, setPassword] = useState(''); //state
    const onIDHandler = (event) => {
        setID(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onLoginHandler = (event) => {
        event.preventDefault();
    };

    return (
        <MainTheme
            style={{
                width: '100%',
                height: '1024px',
                backgroundImage: `url("/images/LoginBackground.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <SignUpLabel style={{ marginTop: '10%' }}>
                <span style={{ color: 'red' }}>Traview</span>
                &nbsp;로그인
            </SignUpLabel>
            <LoginLabel>방문해주셔서 감사합니다</LoginLabel>
            <BackgroundBox style={{ height: '516px', marginTop: '2%' }}>
                {/*소셜 로그인 박스*/}
                <div
                    style={{
                        margin: '0 auto',
                        width: '88%',
                        height: '30%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        position: 'relative',
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
                            <img src="/images/facebook.png" alt="Facebook" />
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
                    onSubmit={{ onLoginHandler }}
                    style={{
                        height: '70%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                    }}
                >
                    <InputBar
                        style={{ height: '17%' }}
                        placeholder="아아디"
                        type="text"
                        value={ID}
                        onChange={onIDHandler}
                    />
                    <InputBar
                        style={{ height: '17%', marginTop: '-3%' }}
                        placeholder="비밀번호"
                        type="password"
                        value={Password}
                        onChange={onPasswordHandler}
                    />
                    <p
                        style={{
                            width: '86%',
                            marginTop: '-5%',
                            textAlign: 'right',
                        }}
                    >
                        비밀번호찾기
                    </p>
                    <SubmittBtn
                        style={{ height: '17%', marginTop: '-2%' }}
                        onClick={{ onLoginHandler }}
                    >
                        Traview 로그인
                    </SubmittBtn>

                    <IDCheckLabel>
                        <p>아이디가 없으신가요?&nbsp;&nbsp; </p>
                        <Link style={{ color: 'red' }} to={'/register'}>
                            &nbsp;가입하기
                        </Link>
                    </IDCheckLabel>
                </form>
            </BackgroundBox>
        </MainTheme>
    );
}

export default Login;

//  516 height:   617 14
