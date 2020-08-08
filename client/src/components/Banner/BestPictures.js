import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 17px;
    overflow: hidden;
    break-inside: avoid;
    border-radius: 30px;
    position: relative;
    border: 2px solid #ff534b;
    margin-right: 15px;
    &:hover {
        border: 2px solid #50bcdf;
    }
    cursor: pointer;
`;

const InterBox = styled.div`
    left: 57.89%;
    right: 34.59%;
    top: 3.57%;
    bottom: 86.22%;
    position: absolute;
    background: transparent;
    border: none;
`;

const InterestCount = styled.p`
    position: absolute;
    height: 15px;
    left: 66.92%;
    right: 26.69%;
    top: calc(50% - 15px / 2 - 81.5px);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.2px;
`;

const LikeBox = styled.div`
    position: absolute;
    left: 72.09%;
    right: 6.39%;
    top: 4.57%;
    bottom: 86.22%;
    position: absolute;
    background: transparent;
    border: none;
`;

const LikeNumber = styled.p`
    position: absolute;
    height: 15px;
    left: 90.59%;
    right: 6.02%;
    top: calc(50% - 15px / 2 - 81.5px);
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    letter-spacing: -0.2px;
`;

const Username = styled.p`
    position: absolute;
    height: 15px;
    left: 8.77%;
    right: 84.21%;
    top: calc(50% - 15px / 2 + 80.5px);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.2px;
`;

const LocalBox = styled.div`
    position: absolute;
    left: 75.58%;
    right: 14.66%;
    top: 84.69%;
    bottom: 8.16%;
    background: transparent;
    border: none;
`;

const LocationName = styled.p`
    position: absolute;
    height: 15px;
    left: 82.84%;
    right: 6.02%;
    top: calc(50% - 15px / 2 + 74.5px);
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.2px;
`;

const Avatar = styled.img`
    max-width: 100%;
    vertical-align: bottom;
    width: 28px;
    height: 28px;
    position: relative;
    background: transparent;
    border: none;
`;
const AvatarBox = styled.div`
    position: absolute;
    left: 7.02%;
    right: 83.46%;
    top: 72.96%;
    bottom: 12.76%;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
`;

const BestImage = styled.img`
    max-width: 100%;
    vertical-align: bottom;
    width: 264px;
    height: 196px;
    border-radius: 30px;
    position: relative;
`;

export default (props) => {
    const {
        userId,
        interestCount,
        likeCount,
        user,
        userName,
        imagePath,
        locationName,
    } = props.data;
    return (
        <Container>
            <BestImage src={imagePath} alt={userName} />
            <InterBox>
                <img src="/images/Interesting.png" alt="Interesting" />
            </InterBox>
            <InterestCount>{interestCount}</InterestCount>
            <LikeBox>
                <img src="/images/Like.png" alt="Like" />
            </LikeBox>
            <LikeNumber>{likeCount}</LikeNumber>
            <Username>{userName}</Username>

            <AvatarBox>
                <Avatar src={user} alt="Avatar" />
            </AvatarBox>

            <LocalBox>
                <img src="/images/location.png" alt="Location" />
            </LocalBox>
            <LocationName>{locationName}</LocationName>
        </Container>
    );
};
