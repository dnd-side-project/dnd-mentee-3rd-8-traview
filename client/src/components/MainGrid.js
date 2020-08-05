import React, { useState, useEffect } from 'react';
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
  width: 1200px;
  margin: 20px auto;
  columns: 4;
  columns-gap: 40px;
`;

export default () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=15`)
      .then((res) => setImages([...images, ...res.data]));
  };

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
          {images.map((image) => (
            <Picture imagePath={image.urls.small} key={image.id} />
          ))}
        </Container>
      </InfiniteScroll>
    </>
  );
};
