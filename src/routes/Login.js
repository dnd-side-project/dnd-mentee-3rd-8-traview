import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import styled from 'styled-components';
import { BackgroundBox } from '../components/CommonStyle/BackgroundBox';
import { InputBar } from '../components/CommonStyle/InputBar';
import { MainTheme } from '../components/CommonStyle/MainTheme';
import { SignUpLabel } from '../components/CommonStyle/SignUpLabel';
import { SocialBox } from '../components/CommonStyle/SocialBox';
import { SocialFont } from '../components/CommonStyle/SocialFont';
import { SocialImage } from '../components/CommonStyle/SocialImage';
import { SubmittBtn } from '../components/CommonStyle/SubmittBtn';
import { SocialCollection } from '../components/CommonStyle/SocialCollection';
const LoginLabel = styled.div`
    margin-top: 5%;
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
    const [, dispatch] = useStateValue();
    const [ID, setID] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();
    const onLoginHandler = (event) => {
        event.preventDefault();
    };

    const googleSignIn = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                // const unsubscribe = db
                //     .collection('users')
                //     .where('displayName', '==', '백동우')
                //     .onSnapshot((snapshot) => {
                //         setHasUsers(
                //             snapshot.docs.map((doc) => ({
                //                 id: doc.id,
                //                 post: doc.data(),
                //             }))
                //         );
                //     });
                // if (hasUsers[0] === undefined) {
                //     db.collection('users').add({
                //         displayName: result.user.displayName,
                //         email: result.user.email,
                //         photoURL: result.user.photoURL,
                //     });
                // }
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
        <MainTheme bg={'/images/LoginBackground.png'}>
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
                <LoginLabel>방문해주셔서 감사합니다</LoginLabel>
                <SignUpLabel style={{ marginTop: '2%' }}>
                    <img
                        style={{ marginRight: '30px' }}
                        src="/images/Logo.png"
                        alt="Logo"
                    />
                    &nbsp;로그인
                </SignUpLabel>

                <BackgroundBox style={{ height: '516px', marginTop: '-3%' }}>
                    {/*소셜 로그인 박스*/}
                    <SocialCollection>
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
                        onSubmit={onLoginHandler}
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
                            onChange={(e) => setID(e.currentTarget.value)}
                        />
                        <InputBar
                            style={{ height: '17%', marginTop: '-3%' }}
                            placeholder="비밀번호"
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
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
                            onClick={onLoginHandler}
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
            </div>
        </MainTheme>
    );
}

export default Login;

//  516 height:   617 14
