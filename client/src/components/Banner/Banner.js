import React from 'react';
import styled from 'styled-components';
import './Banner.css';
import BestPictures from './BestPictures';

const Container = styled.div`
    position: relative;
    margin-bottom: 14px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 787px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.0001) 0,
            rgba(25, 25, 25, 0.344459) 69.14%,
            rgba(25, 25, 25, 0.344459) 69.14%,
            rgba(25, 25, 25, 0.344459) 90%,
            rgba(25, 25, 25, 0.344459) 90%,
            rgba(25, 25, 25, 0.0001) 100%
        ),
        url('images/banner.png');
`;

const TitleContainer = styled.div`
    position: absolute;
    left: 117px;
    bottom: 400px;
`;

const Title = styled.h1`
    font-size: 80px;
    line-height: 116px;
    letter-spacing: -1.6px;
    margin-bottom: 41px;
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
`;

const BestPicContainer = styled.div`
    position: absolute;
    bottom: 72px;
`;

function Banner() {
    const datas = [
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
        {
            username: 'John',
            novelty: 1,
            heart: 9,
            user: '/images/Avatar3.png',
            imagePath: '/images/test3.jpg',
            area: '경주',
        },
    ];

    return (
        <Container>
            <BackgroundImage />
            <TitleContainer>
                <div style={{ fontSize: '40px', letterSpacing: '-0.8px' }}>
                    오늘의 <span style={{ color: 'red' }}>추천 여행지</span>
                </div>
                <Title>경주 통일전</Title>
                <ReviewButton>관련 리뷰 보기</ReviewButton>
            </TitleContainer>
            <BestPicContainer>
                <div className="row__posters">
                    {datas.map((data, index) => (
                        <img
                            key={index}
                            className="row__poster"
                            src={data.imagePath}
                            alt=""
                        />
                    ))}
                </div>
            </BestPicContainer>
        </Container>
    );
}

export default Banner;
