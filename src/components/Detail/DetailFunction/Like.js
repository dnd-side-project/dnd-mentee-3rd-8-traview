import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LikeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Image = styled.img`
    width: ${(props) => (props.like ? '60' : '62')};
    height: ${(props) => (props.like ? '60' : '53')};
`;

const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${(props) => (props.like ? '#FFC04B' : '#F7729B')};
    margin-top: ${(props) => (props.like ? '20px' : '26px')};
`;

export default () => {
    return (
        <Container>
            <LikeContainer>
                <Image like src={'/images/Bigintersting.png'} />
                <Label like>신기해요</Label>
            </LikeContainer>
            <LikeContainer>
                <Image src={'/images/heart.png'} />
                <Label>찜목록</Label>
            </LikeContainer>
        </Container>
    );
};
