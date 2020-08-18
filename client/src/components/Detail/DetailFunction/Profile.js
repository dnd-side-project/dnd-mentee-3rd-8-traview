import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const LeftContainer = styled.div`
    width: 110px;
    height: 110px;
    margin-right: 17px;
`;

const RightContainer = styled.div`
    width: 138px;
    display: flex;
    flex-direction: column;
`;

const ProfileImage = styled.img`
    width: 110px;
    height: 110px;
    border: 2px solid #ff534b;
    box-sizing: border-box;
    border-radius: 55px;
`;

const NameLabel = styled.label`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
`;

const Follower = styled.label`
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
`;

const FollowButton = styled.button`
    margin-top: 9px;
    width: 72px;
    height: 33px;
    background: #ff534b;
    border: 1px solid #ff534b;
    border-radius: 16px;
    cursor: pointer;
    color: #ffffff;
    font-family: Noto Sans KR;
    font-weight: 500px;
    font-size: 18px;
    line-height: 26px;
`;

export default ({ profileImage, follower }) => {
    return (
        <Container>
            <LeftContainer>
                <ProfileImage src={profileImage} />
            </LeftContainer>
            <RightContainer>
                <NameLabel>크리스 에반스</NameLabel>
                <Follower>팔로워 {follower}</Follower>
                <FollowButton>팔로우</FollowButton>
            </RightContainer>
        </Container>
    );
};
