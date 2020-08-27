import React, { useEffect, useState } from 'react';
import BestPicture from './BestPicture';
import db from '../../firebase';
import styled from 'styled-components';
import './Banner.css';

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
    cursor: pointer;
    outline: none;
`;

const BestPicContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 72px;
    display: flex;
    justify-content: flex-end;
`;

function Banner() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('novelty', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
    }, []);

    const nextSlide = () => {
        const container = document.querySelector('.row__posters');
        sideScroll(container, 'right', 25, 300, 30);
    };

    const prevSlide = () => {
        const container = document.querySelector('.row__posters');
        sideScroll(container, 'left', 25, 300, 30);
    };

    const sideScroll = (element, direction, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <Container>
            <BackgroundImage />
            <TitleContainer>
                <div style={{ fontSize: '40px', letterSpacing: '-0.8px' }}>
                    오늘의{' '}
                    <span style={{ color: 'red', fontFamily: 'bold' }}>
                        추천 여행지
                    </span>
                </div>
                <Title>경주 통일전</Title>
                <ReviewButton>관련 리뷰 보기</ReviewButton>
            </TitleContainer>
            <BestPicContainer>
                <button
                    id="slideBack"
                    type="button"
                    onClick={prevSlide}
                    style={{
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '64px',
                        outline: '0',
                        cursor: 'pointer',
                    }}
                >
                    {'<'}
                </button>
                <div className="row__posters">
                    {posts.map(({ post, id }) => (
                        <BestPicture
                            key={id}
                            advertising={post.advertising}
                            area={post.area}
                            avatar={post.avatar}
                            heart={post.heart}
                            imageUrl={post.imageUrl}
                            latitude={post.latitude}
                            longitude={post.longitude}
                            mood={post.mood}
                            novelty={post.novelty}
                            rating={post.rating}
                            review={post.review}
                            timestamp={post.timestamp}
                            title={post.title}
                            username={post.username}
                        />
                    ))}
                </div>
                <button
                    id="slide"
                    type="button"
                    onClick={nextSlide}
                    style={{
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '64px',
                        outline: '0',
                        cursor: 'pointer',
                    }}
                >
                    {'>'}
                </button>
            </BestPicContainer>
        </Container>
    );
}

export default Banner;
