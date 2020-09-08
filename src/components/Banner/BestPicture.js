import React, { useState } from 'react';
import styled from 'styled-components';
import DetailPage from '../Detail/DetailPage';
import Avartar from '../Detail/DetailFunction/Avartar';
import LikeInterest from '../Detail/DetailFunction/Like_Interest';
const LeftBottomContainer = styled.div`
    position: absolute;
    left: 6px;
    bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
`;
const RightBottomContainer = styled.div`
    position: absolute;
    bottom: 5px;
    right: 6px;
    display: flex;
    align-items: center;
    visibility: hidden;
`;

const RightTopContainer = styled.div`
    position: absolute;
    top: 4px;
    right: 6px;
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 224px;
    height: 160px;
    border-radius: 10px;
    object-fit: container;
    transition: transform 450ms;

    &: hover {
        transform: scale(1.1);
    }
`;

const ImageContainer = styled.div`
    position: relative;
    margin-right: 24px;
    cursor: pointer;
    &: hover {
        ${LeftBottomContainer} {
            visibility: visible;
        }
        ${RightBottomContainer} {
            visibility: visible;
        }

        ${Image} {
            opacity: 0.9;
            transition: opacity 450ms ease-out;
        }
    }
`;

const TextBox = styled.label`
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.2px;
`;

function BestPicture({
    advertising,
    area,
    avatar,
    heart,
    imageUrl,
    latitude,
    longitude,
    mood,
    novelty,
    rating,
    review,
    timestamp,
    title,
    username,
    address,
    id,
    uid,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <DetailPage
                id={id}
                open={isModalOpen}
                close={onClose}
                advertising={advertising}
                area={area}
                avatar={avatar}
                heart={heart}
                imageUrl={imageUrl}
                latitude={latitude}
                longitude={longitude}
                mood={mood}
                novelty={novelty}
                rating={rating}
                review={review}
                timestamp={timestamp}
                title={title}
                username={username}
                address={address}
                uid={uid}
            />
            <ImageContainer onClick={() => setIsModalOpen(true)}>
                <Image src={imageUrl} alt="" />
                <LeftBottomContainer>
                    <Avartar uid={uid} Type="Best" />
                    <TextBox>{username}</TextBox>
                </LeftBottomContainer>
                <RightTopContainer>
                    <LikeInterest postId={id} Type="small" />
                    {/*<img*/}
                    {/*    style={{ marginRight: '4px' }}*/}
                    {/*    src="/images/Interesting.png"*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                    {/*<TextBox>{novelty}</TextBox>*/}
                    {/*<img*/}
                    {/*    style={{ marginRight: '4px', marginLeft: '14px' }}*/}
                    {/*    src="/images/like.png"*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                    {/*<TextBox>{heart}</TextBox>*/}
                </RightTopContainer>
                <RightBottomContainer>
                    <img
                        style={{ marginRight: '4px' }}
                        src="/images/location.png"
                        alt=""
                    />
                    <TextBox>{area}</TextBox>
                </RightBottomContainer>
            </ImageContainer>
        </>
    );
}

export default BestPicture;
