import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import DetailPage from '../Detail/DetailPage';
import Avartar from '../Detail/DetailFunction/Avartar';
import LikeInterest from '../Detail/DetailFunction/Like_Interest';

const LeftBottomContainer = styled.div`
    position: absolute;
    left: 12px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
`;

const RightBottomContainer = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    visibility: hidden;
`;
const Image = styled.img`
    width: 100%;
    border-radius: 20px;
`;

const Box = styled.div`
    width: 100%;
    margin: 0 0 45px;
    overflow: hidden;
    break-inside: avoid;
    cursor: pointer;
`;

const ImageTitle = styled.h2`
    margin: 8px 0 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
`;

const Description = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.32px;
`;

const ImageContainer = styled.div`
    position: relative;

    &: hover {
        ${LeftBottomContainer} {
            visibility: visible;
        }
        ${RightBottomContainer} {
            visibility: visible;
        }
        ${Image} {
            opacity: 0.6;
            transition: opacity 300ms ease-out;
        }
    }
`;

const TextBox = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.32px;
`;

const Picture = forwardRef(
    (
        {
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
        },
        ref
    ) => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const onClose = () => {
            setIsModalOpen(false);
        };

        return (
            <>
                <DetailPage
                    open={isModalOpen}
                    close={onClose}
                    id={id}
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
                <Box>
                    <ImageContainer>
                        <Image
                            onClick={() => setIsModalOpen(true)}
                            ref={ref}
                            src={imageUrl}
                            alt=""
                        />
                        <LeftBottomContainer>
                            <Avartar uid={uid} Type="MainArea" />
                            <TextBox>{username}</TextBox>
                        </LeftBottomContainer>
                        <LikeInterest postId={id} />
                        <RightBottomContainer>
                            <img
                                style={{ marginRight: '4px' }}
                                src="/images/location.png"
                                alt=""
                            />
                            <TextBox>{area}</TextBox>
                        </RightBottomContainer>
                    </ImageContainer>
                    <ImageTitle>{title}</ImageTitle>
                    <Description>{review?.slice(0, 20)}...</Description>
                </Box>
            </>
        );
    }
);

export default Picture;
