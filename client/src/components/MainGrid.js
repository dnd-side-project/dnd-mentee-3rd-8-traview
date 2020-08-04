import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';

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
  width: 1250px;
  margin: 20px auto;
  columns: 4;
  columns-gap: 40px;
`;

export default () => {
  /* 테스트 데이터(백엔드 구현시 삭제) */
  const datas = [
    {
      id: '1',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test1.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '2',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test2.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '3',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test3.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '4',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test4.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '5',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test5.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '6',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test6.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '7',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test7.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '8',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test8.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '9',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test9.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '10',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test10.jpg',
      description: '어쩌구저쩌구...',
    },
    {
      id: '11',
      title: '여행 제목 어쩌구',
      imagePath: '/images/test11.jpg',
      description: '어쩌구저쩌구...',
    },
  ];

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
        {datas.map((data) => (
          <Picture
            key={data.id}
            title={data.title}
            imagePath={data.imagePath}
            description={data.description}
          />
        ))}
      </Container>
    </>
  );
};
