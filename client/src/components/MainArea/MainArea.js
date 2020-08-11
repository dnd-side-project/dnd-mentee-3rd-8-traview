import React, { useState, useEffect, useCallback } from 'react';
import { API_ROOT, ACCESS_KEY } from '../../const/apiConst';
import styled from 'styled-components';
import axios from 'axios';
import Picture from './Picture';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    const [images, setImages] = useState([]);

    const fetchImages = useCallback(async () => {
        const result = await axios.get(
            `${API_ROOT}/photos/random?client_id=${ACCESS_KEY}&count=15`
        );
        setImages((images) => [...images, ...result.data]);
    }, [setImages]);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    return (
        <>
            <HeaderContainer>
                <Title>신기한 장소들</Title>
                <MoodList>
                    <Mood>도시</Mood>
                    <Mood>자연</Mood>
                    <Mood>몽환</Mood>
                    <Mood>여유</Mood>
                    <Mood>고요</Mood>
                    <Mood>활기</Mood>
                    <Mood>낭만</Mood>
                </MoodList>
            </HeaderContainer>
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader />}
            >
                <Container>
                    {images.map((image, index) => (
                        <Picture imagePath={image.urls.small} key={index} />
                    ))}
                </Container>
            </InfiniteScroll>
        </>
    );
};
