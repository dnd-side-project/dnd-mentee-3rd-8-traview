import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import DetailPage from "../Detail/DetailPage";
const Container = styled.div`
    overflow: hidden;
    break-inside: avoid;
    border-radius: 10px;
    border: 2px solid #ff534b;
    margin-right: 36px;
    width: 224px;
    height: 160px;
    &:hover {
        background: radial-gradient(
            87.41% 87.41% at 50% 50%,
            rgba(0, 0, 0, 0.0001) 0%,
            #000000 100%
        );
        border: 2px solid #50bcdf;
        height: 196px;
        width: 266px;
    }
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
    top: 5%;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
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
    top: 5%;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    letter-spacing: -0.2px;
`;

const Username = styled.p`
    position: absolute;
    height: 15px;
    left: 6.77%;
    right: 81.21%;
    top: 87%;
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
    left: 82.84%;
    right: 6.02%;
    top: 85%;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.2px;
`;
const Avatar = styled.img`
    max-width: 100%;
    position: relative;
    background: transparent;
    border: none;
`;
const AvatarBox = styled.div`
    position: absolute;
    left: 8.5%;
    right: 83.46%;
    top: 72.96%;
    bottom: 12.76%;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
`;
const Block = styled.div`
    border-radius: 10px;
    position: relative;
    border: 2px solid #ff534b;
    margin-right: 36px;
    width: 224px;

    height: 160px;
    &:hover {
        border: 2px solid #50bcdf;
        height: 196px;
        width: 266px;
        opacity: 1;
    }
    opacity: 0;
`;

function BestPicture(props) {
    useEffect(() => {
        setIsModalOpen(false);
    }, []);
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const onClose = () => {
        console.log('실행되기전', IsModalOpen);
        setIsModalOpen(false);
        console.log('onclose 실행됨 isModalOpen 값:', IsModalOpen);
    };
    const {
        userId,
        interestCount,
        likeCount,
        user,
        userName,
        imagePath,
        locationName,
        Latitude,
        longitude
    } = props.data;
    return (
        <>
            <DetailPage
                imagePath={imagePath}
                open={IsModalOpen}
                close={onClose}
                Latitude={Latitude}
                longitude={longitude}
            />
            <Container
                style={{
                    backgroundImage: `url('${imagePath}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                <Block>
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
                </Block>
            </Container>
        </>
    );
}
export default BestPicture;
