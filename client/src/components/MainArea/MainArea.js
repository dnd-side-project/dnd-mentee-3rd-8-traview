import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Picture from './Picture';
import Loader from './Loader';
import './MainGrid.css';
import useImageSearch from './useImageSearch';

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
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const { images, hasMore, loading, error } = useImageSearch(
        query,
        pageNumber
    );

    const observer = useRef();
    const lastImageElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

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
            <Container>
                {images.map((image, index) => {
                    if (images.length === index + 1) {
                        return (
                            <>
                                <Picture
                                    imagePath={image.urls.small}
                                    key={index}
                                />
                                <div ref={lastImageElementRef}>라스트</div>
                            </>
                        );
                    } else {
                        return (
                            <Picture imagePath={image.urls.small} key={index} />
                        );
                    }
                })}
            </Container>
            {loading && <Loader />}
            <div>{error && 'Error'}</div>
        </>
    );
};
