import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 21px;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 455px;
  height: 46px;
  font-size: 20px;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 8px;
`;

const AreaContainer = styled.ul`
  display: flex;
`;

const AreaList = styled.li`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  display: inline-block;
  padding: 0px 10px;
  letter-spacing: -0.32px;
`;

export default () => {
  return (
    <Container>
      <Logo src />
      <Input type='text' placeholder='검색' />
      <NavContainer>
        <AreaContainer>
          <AreaList>서울</AreaList>
          <AreaList>부산</AreaList>
          <AreaList>대구</AreaList>
          <AreaList>인천</AreaList>
          <AreaList>경주</AreaList>
          <AreaList>대전</AreaList>
          <AreaList>울산</AreaList>
          <AreaList>경기도</AreaList>
          <AreaList>강원도</AreaList>
          <AreaList>충청도</AreaList>
          <AreaList>전라도</AreaList>
          <AreaList>경상도</AreaList>
          <AreaList>제주도</AreaList>
        </AreaContainer>
      </NavContainer>
      <div>사진올리기</div>
      <div>로그인</div>
    </Container>
  );
};
