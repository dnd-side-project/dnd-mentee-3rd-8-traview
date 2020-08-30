import React, { useState } from 'react';
import styled from 'styled-components';
import DetailPage from '../Detail/DetailPage';
import { Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import db from '../../firebase';
import UploadPage from '../Upload/UploadPage';
const useStyles = makeStyles((theme) => ({
    ButtonGroup: {
        width: '150px',
        height: '100px',
        background: 'rgba(25, 25, 25, 0.5)',
        backdropFilter: 'blur(2.71828px)',
        borderRadius: '20px',
    },
    Button: {
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '29px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        border: 'none',
    },
}));
const RightTopContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 12px;
    display: flex;
    align-items: center;
    visibility: hidden;
`;
const ButtonContainer = styled.div`
    position: absolute;
    top: 40%;
    right: 30%;
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
        ${RightTopContainer} {
            visibility: visible;
        }
        ${Image} {
            opacity: 0.6;
            transition: opacity 300ms ease-out;
        }
        ${ButtonContainer} {
            visibility: visible;
        }
    }
`;

const TextBox = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.32px;
`;
export default ({
    setCheckUpdate,
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
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [IsUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(false);
        setIsUpdateModalOpen(false);
    };
    const classes = useStyles();

    const DeletePost = () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
            db.collection('posts')
                .doc(id)
                .delete()
                .then(function () {
                    console.log('Document successfully deleted!');
                })
                .catch(function (error) {
                    console.error('Error removing document: ', error);
                });
        }
    };
    const UpdatePost = () => {
        setIsUpdateModalOpen(true);

        // let PostInfoChange = db.collection('posts').doc(id);
        // return PostInfoChange.update({
        //     title: '이렇게업데이트하는구나',
        // });
    };
    return (
        <>
            <UploadPage
                open={IsUpdateModalOpen}
                close={onClose}
                id={id}
                advertising={advertising}
                area={area}
                // avatar={avatar}
                // heart={heart}
                imageUrl={imageUrl}
                latitude={latitude}
                longitude={longitude}
                mood={mood}
                novelty={novelty}
                rating={rating}
                review={review}
                // timestamp={timestamp}
                title={title}
                username={username}
                address={address}
            />
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
            />
            {/*onClick={() => setIsModalOpen(true)}*/}
            <Box>
                <ImageContainer>
                    <Image src={imageUrl} alt="" />
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

                    <ButtonContainer>
                        <ButtonGroup
                            className={classes.ButtonGroup}
                            orientation="vertical"
                        >
                            <Button
                                className={classes.Button}
                                style={{
                                    width: '100%',
                                    height: '50%',
                                }}
                                onClick={UpdatePost}
                            >
                                게시글 수정
                            </Button>
                            {/*<hr*/}
                            {/*    style={{*/}
                            {/*        width: '100%',*/}
                            {/*        border: '1px solid white',*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <Button
                                className={classes.Button}
                                style={{
                                    width: '100%',
                                    height: '50%',
                                    border: 'none',
                                }}
                                onClick={DeletePost}
                            >
                                게시글 삭제
                            </Button>
                        </ButtonGroup>
                    </ButtonContainer>
                </ImageContainer>
                <ImageTitle>{title}</ImageTitle>
                <Description>{review?.slice(0, 20)}...</Description>
            </Box>
        </>
    );
};
