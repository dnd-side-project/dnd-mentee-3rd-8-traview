import React from 'react';
import styled from 'styled-components';

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

const RightTopContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 12px;
    display: flex;
    align-items: center;
    visibility: hidden;
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 10px;
`;

const Box = styled.div`
    width: 100%;
    margin: 0 0 5px;
    overflow: hidden;
    break-inside: avoid;
    cursor: pointer;
`;

const ImageTitle = styled.h2`
    margin: 8px 0 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
`;

const Description = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.2px;
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
        ${RightTopContainer} {
            visibility: visible;
        }
        ${Image} {
            opacity: 0.6;
            transition: opacity 300ms ease-out;
        }
    }
`;

const TextBox = styled.label`
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.2px;
`;

export default ({
                    imagePath,
                    title,
                    description,
                    avatar,
                    username,
                    novelty,
                    heart,
                    area,
                }) => {
    return (
        <Box>
            <ImageContainer>
                <Image src={imagePath} alt="" />
                <LeftBottomContainer>
                    <img
                        style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '14px',
                            objectFit: 'cover',
                            marginBottom: '3px',
                        }}
                        src={avatar}
                        alt=""
                    />
                    <TextBox>{username}</TextBox>
                </LeftBottomContainer>
                <RightTopContainer>
                    <img
                        style={{ marginRight: '4px' }}
                        src="/images/Interesting.png"
                        alt=""
                    />
                    <TextBox>{novelty}</TextBox>
                    <img
                        style={{ marginRight: '4px', marginLeft: '14px' }}
                        src="/images/like.png"
                        alt=""
                    />
                    <TextBox>{heart}</TextBox>
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
            <ImageTitle>{title}</ImageTitle>
            <Description>{description}</Description>
        </Box>
    );
};