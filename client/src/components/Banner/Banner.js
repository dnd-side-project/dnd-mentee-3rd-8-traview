import React from 'react';
import styled from 'styled-components';
import BestPictures from './BestPictures';

const BannerPic = styled.div`
  overflow: hidden;
  break-inside: avoid;
  border-radius: 30px;
  position: relative;
  margin-bottom: 60px;
`;

const Image = styled.img`
  vertical-align: bottom;
  width: 1440px;
  height: 736px;
  position: absolute;
`;
const BottomMain = styled.div`

  position: absolute;
  width: 1439px
  height: 210px;
  left: 0px;
  top: 612px;
  background: linear-gradient(180deg, rgba(25, 25, 25, 0.0001) 0%, #191919 100%);`;

const ContainerText = styled.div`
  margin-left: 117px;
  margin-top: 100px;
  align-items: center;
  font-style: normal;
  position: relative;
`;
const RecLabel = styled.h5`
  font-size: 40px;
  line-height: 58px;
  display: flex;
  letter-spacing: -0.8px;
  position: relative;
`;
const MainLabel = styled.h2`
  font-weight: 500;
  font-size: 80px;
  line-height: 116px;
  align-items: center;
  letter-spacing: -1.6px;
  position: relative;
`;
const ConnectBtn = styled.button`
  display: flex;
  font-size: 24px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 28px;
  padding: 4px 38px;
  align-items: center;
  letter-spacing: -0.48px;
  line-height: 35px;
  color: #ffffff;
  background: transparent;
  position: relative;
`;

const ContainerPicture = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 90px;
  position: relative;
`;

const Best = styled.h2`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  line-height: 43px;
  letter-spacing: -0.6px;
  margin-right: 30px;
  position: relative;
`;

const BestPic = styled.div`
  justify-content: flex-end;
  margin-top: 40px;
  display: flex;
  position: relative;
`;

function Banner() {
  const data = [
    {
      userId: 'test1',
      interestCount: 1,
      likeCount: 4,
      user: '/images/Avatar2.png',
      userName: 'John',
      imagePath: '/images/test1.jpg',
      locationName: '부산',
    },
    //userId,userName, interestCount, likeCount, username, locationName, imagePath
    {
      userId: 'test2',
      interestCount: 4,
      likeCount: 5,
      user: '/images/Avatar1.png',
      userName: 'Pack',
      imagePath: '/images/test2.jpg',
      locationName: '서울',
    },
    {
      userId: 'test3',
      interestCount: 1,
      likeCount: 9,
      user: '/images/Avatar3.png',
      userName: 'PSY',
      imagePath: '/images/test3.jpg',
      locationName: '경주',
    },
  ];

  return (
    <BannerPic>
      <Image src="/images/Main.png" alt="RecommendPlace" />
      <ContainerText>
        <RecLabel>
          오늘의
          <span style={{ color: 'red' }}> 추천 여행지 </span>
        </RecLabel>
        <MainLabel> 경주 통일전 </MainLabel>
        <ConnectBtn> 관련 사진보기</ConnectBtn>
      </ContainerText>
      <ContainerPicture>
        <Best> 최고의 사진들 </Best>
        <BestPic>
          {data.map((data, index) => (
            <BestPictures data={data} key={index} />
          ))}
        </BestPic>
      </ContainerPicture>
      <BottomMain />
    </BannerPic>
  );
}

export default Banner;