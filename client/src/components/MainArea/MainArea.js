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
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.44px;

    &:hover {
        background-color: #ff534b;
    }
`;

const Container = styled.div`
    width: 1440px;
    margin: 20px 0;
    columns: 5;
    columns-gap: 20px;
`;

export default () => {
    const [posts, setPosts] = useState([]);
    const [last, setLast] = useState(null);
    const moods = ['도시', '자연', '몽환', '여유', '고요', '활기', '낭만'];

    useEffect(() => {
        db.collection('posts')
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
    }, []);

    const next = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
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

    return (
        <>
            <HeaderContainer>
                <Title>신기한 장소들</Title>
                <MoodList>
                    {moods.map((mood) => (
                        <Mood key={mood}>{mood}</Mood>
                    ))}
                </MoodList>
            </HeaderContainer>

            <InfiniteScroll
                dataLength={posts.length}
                next={next}
                hasMore={true}
                loader={<Loader />}
            >
                <Container>
                    {posts.map(({ post, id }) => (
                        <Picture
                            imagePath={post.imageUrl}
                            key={id}
                            title={post.title}
                            description={post.review}
                        />
                    ))}
                </Container>
            </InfiniteScroll>
        </>
    );
};
