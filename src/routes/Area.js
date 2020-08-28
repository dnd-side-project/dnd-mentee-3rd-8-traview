import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/MainArea/Loader';
import Picture from '../components/MainArea/Picture';
import styled from 'styled-components';

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
        url('images/Areatest.png');
    background-size: cover;
    background-position: center center;
`;

const TitleContainer = styled.div`
    position: absolute;
    left: 117px;
    bottom: 400px;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
    font-style: normal;
    line-height: 101px;
    letter-spacing: -1.4px;
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

const MarginContainer = styled.div`
    position: relative;
    z-index: 100;
    max-width: 1440px;
    margin: auto;
    margin-top: -90px;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
`;

const MoodList = styled.ul`
    display: flex;
`;

const Mood = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 46px;
    margin-left: 20px;
    box-sizing: border-box;
    color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
    &:hover {
        color: #ff534b;
        transition: color 300ms ease-out;
    }
`;

const ScrollContainer = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;

function Area() {
    const [{ term }] = useStateValue();
    const [last, setLast] = useState(null);
    const [posts, setPosts] = useState([]);
    const [mood, setMood] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const moods = ['도시', '자연', '몽환', '여유', '고요', '활기', '낭만'];

    useEffect(() => {
        const unsubscribe = db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
                setLast(snapshot.docs[snapshot.docs.length - 1]);
            });

        return () => {
            unsubscribe();
        };
    }, []);

    const next = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setHasMore(false);

                        return;
                    }
                    setPosts([
                        ...posts,
                        ...snapshot.docs.map((doc) => ({
                            id: doc.id,
                            post: doc.data(),
                        })),
                    ]);
                    setLast(snapshot.docs[snapshot.docs.length - 1]);
                });
        }
    };

    const moodNext = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .where('mood', '==', mood)
                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setHasMore(false);

                        return;
                    }
                    setPosts([
                        ...posts,
                        ...snapshot.docs.map((doc) => ({
                            id: doc.id,
                            post: doc.data(),
                        })),
                    ]);
                    setLast(snapshot.docs[snapshot.docs.length - 1]);
                });
        }
    };

    const onMoodChange = (e) => {
        setMood(e.currentTarget.innerText);
        setPosts([]);

        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .where('mood', '==', e.currentTarget.innerText)
            .limit(10)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
                setLast(snapshot.docs[snapshot.docs.length - 1]);
            });
    };

    return (
        <>
            {/* 배너 */}
            <Container>
                <BackgroundImage />
                <TitleContainer>
                    <Title>{term}의 여행지들</Title>
                    <ReviewButton>배경 리뷰 보기</ReviewButton>
                </TitleContainer>
            </Container>

            {/* 인피니티 스크롤 */}
            <MarginContainer>
                <HeaderContainer>
                    <MoodList>
                        {moods.map((moodText) => (
                            <Mood
                                key={moodText}
                                onClick={onMoodChange}
                                active={moodText === mood ? true : false}
                            >
                                {moodText}
                            </Mood>
                        ))}
                    </MoodList>
                </HeaderContainer>

                <InfiniteScroll
                    dataLength={posts.length}
                    next={(mood && moodNext) || next}
                    hasMore={hasMore}
                    loader={<Loader />}
                >
                    <ScrollContainer>
                        {posts.map(({ post, id }) => (
                            <Picture
                                id={id}
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
                                address={post.address}
                            />
                        ))}
                    </ScrollContainer>
                </InfiniteScroll>
            </MarginContainer>
        </>
    );
}

export default Area;
