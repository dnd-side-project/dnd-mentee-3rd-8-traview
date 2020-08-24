import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import db from '../../firebase';

import styled from 'styled-components';
import './MainGrid.css';

//import Loader from './Loader';
//import InfiniteScroll from 'react-infinite-scroll-component';
//import axios from 'axios';
//import { API_ROOT, ACCESS_KEY } from '../../const/apiConst';

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
    const moods = ['도시', '자연', '몽환', '여유', '고요', '활기', '낭만'];

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .limit(15)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
    }, []);

    /*const fetchImages = useCallback(async () => {
        const result = await axios.get(
            `${API_ROOT}/photos/random?client_id=${ACCESS_KEY}&count=15`
        );
        setImages((images) => [...images, ...result.data]);
    }, [setImages]);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);*/

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
            <Container>
                {/*{posts.map(({ post, id }) => (*/}
                {/*    <Picture imagePath={post.imageUrl} key={id} />*/}
                {/*))}*/}
            </Container>
            {/* <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader />}
            >

            </InfiniteScroll> */}
        </>
    );
};
