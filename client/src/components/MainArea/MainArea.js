import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Picture from './Picture';
import db from '../../firebase';

import styled from 'styled-components';
import Loader from './Loader';
import './MainGrid.css';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: -0.6px;
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
    border: 2px solid #ff534b;
    border-radius: 23px;
    box-sizing: border-box;
    background-color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.44px;

    &:hover {
        background-color: #ff534b;
        transition: background-color 300ms ease-out;
    }
`;

const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;

export default () => {
    const [posts, setPosts] = useState([]);
    const [last, setLast] = useState(null);
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
                    if (!snapshot.exists) {
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
                    if (!snapshot.exists) {
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
            <HeaderContainer>
                <Title>신기한 장소들</Title>
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
                <Container>
                    {posts.map(({ post, id }) => (
                        <Picture
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
                </Container>
            </InfiniteScroll>
        </>
    );
};
