import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 21px;
`;

const Title = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 49px;
  color: #ff534b;
`;

const NavContainer = styled.nav`
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AreaContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  padding: 0 16px;
`;

const AreaLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.36px;

  &:hover {
    color: #ff534b;
  }
`;

const Search = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-image: url('/images/search.png');
  background-size: cover;
  background-position: center center;
`;

const UploadContainer = styled.div`
  width: 33px;
  height: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UploadIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/images/upload.png');
  background-size: cover;
  background-position: center center;
  filter: invert(1);
`;

const UploadText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.24px;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterText = styled(Link)`
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #ffffff;

  &:hover {
    color: #ff534b;
  }
`;

export default () => {
  return (
    <Container>
      <Title to={'/'}>Traview</Title>
      <NavContainer>
        <AreaContainer>
          <ListItem>
            <AreaLink to={'/area/seoul'}>서울</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/busan'}>부산</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/daegu'}>대구</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/incheon'}>인천</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/gwangju'}>광주</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/daejeon'}>대전</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/ulsan'}>울산</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/gyeonggi'}>경기도</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/gangwon'}>강원도</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/chungcheong'}>충청도</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/jeolla'}>전라도</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/gyeongsang'}>경상도</AreaLink>
          </ListItem>
          <ListItem>
            <AreaLink to={'/area/jeju'}>제주도</AreaLink>
          </ListItem>
        </AreaContainer>
      </NavContainer>
      <Search />
      <UploadContainer>
        <UploadIcon />
        <UploadText>업로드</UploadText>
      </UploadContainer>
      <RegisterContainer>
        <RegisterText to={'/login'}>로그인</RegisterText>
        <div>|</div>
        <RegisterText to={'/register'}>회원가입</RegisterText>
      </RegisterContainer>
    </Container>
  );
};
