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
  font-family: Noto Sans KR;
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

const ListItem = styled.li`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
  border: ${(props) => (props.circle ? '1px solid #979797' : 'none')};
  border-radius: ${(props) => (props.circle ? '50%' : '')};
  padding: ${(props) => (props.circle ? '0' : '0px 13px')};
  height: ${(props) => (props.circle ? '60px' : '')};
  width: ${(props) => (props.circle ? '60px' : '')};
  margin: ${(props) => (props.circle ? '0 14px' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <div>로고</div>
      {/* <Logo src /> */}
      <Input type='text' placeholder='검색' />
      <NavContainer>
        <AreaContainer>
          <ListItem>서울</ListItem>
          <ListItem>부산</ListItem>
          <ListItem>대구</ListItem>
          <ListItem>인천</ListItem>
          <ListItem>경주</ListItem>
          <ListItem>대전</ListItem>
          <ListItem>울산</ListItem>
          <ListItem>경기도</ListItem>
          <ListItem>강원도</ListItem>
          <ListItem>충청도</ListItem>
          <ListItem>전라도</ListItem>
          <ListItem>경상도</ListItem>
          <ListItem>제주도</ListItem>
        </AreaContainer>
      </NavContainer>
      <NavContainer>
        <ListItem circle>
          사진
          <br />
          올리기
        </ListItem>
        <ListItem circle>로그인</ListItem>
      </NavContainer>
    </Container>
  );
};
