import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AreaMain from '../components/Area/AreaMain';
import db from '../firebase';

const Container = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 14px;
    margin-top: -20px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 810px;
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
`;

const TitleContainer = styled.div`
    position: absolute;
    left: 117px;
    top: 292px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 70px;
    line-height: 101px;
    letter-spacing: -1.4px;
    margin-bottom: 35px;
`;

const ReviewButton = styled.button`
    width: 215px;
    height: 45px;
    color: #ffffff;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.48px;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 28px;
    cursor: pointer;
    outline: none;
`;
export default (props) => {
    const localName = props.match.params.id; ///URL 에서 가져옴
    const region = {
        seoul: '서울',
        busan: '부산',
        daegu: '대구',
        incheon: '인천',
        gwangju: '광주',
        daejeon: '대전',
        ulsan: '울산',
        gyeonggi: '경기도',
        gangwondo: '강원도',
        chungcheong: '충청도',
        jeolla: '전라도',
        gyeongsang: '경상도',
        jeju: '제주도',
    };
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts([]);
        db.collection('posts')
            // .where('area', '==', region[localName])
            // .where('heart', '>', 0)
            // .orderBy('heart', 'desc')
            .where('area', '==', region[localName])
            //   .where('heart', '>', 0)
            .limit(1)

            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
    }, [localName]);

    return (
        <Container>
            <div style={{ width: '100%', height: '810px' }}>
                {posts.map(({ post }) => (
                    <BackgroundImage bg={post.imageUrl} key={post} />
                ))}
            </div>

            <TitleContainer>
                <Title>{region[localName]}의 여행지들</Title>
                <ReviewButton>배경 리뷰 보기</ReviewButton>
            </TitleContainer>
            <AreaMain local={region[localName]} />
        </Container>
    );
};
