import styled from 'styled-components';

export const TotalContainer = styled.div`
    width: 1300px;
    height: 900px;
    display: flex;

    justify-content: center;
`;

export const UploadDropZone = styled.div`
    width: 680px;
    height: 870px;
`;

export const RightContainer = styled.div`
    margin-left: 23px;
    width: 524px;
    height: auto;
`;

export const TitleInputBar = styled.div`
    width: 510px;
    height: 440px;
`;
export const AdvertisementComponent = styled.div`
    width: 510px;
    height: 82px;
`;
export const AtmosphereComponent = styled.div`
    width: 510px;
    height: 87px;
`;
export const LocationComponent = styled.div`
    width: 510px;
    height: 137px;
`;
export const RatingComponent = styled.div`
    width: 510px;
    height: 137px;
    position: relative;
`;

export const SubtitleFont = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
`;
export const Mood = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 40px;
    margin-right: 15px;
    border: 2px solid #ff534b;
    box-sizing: border-box;
    border-radius: 23px;
    cursor: pointer;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.36px;
    background-color: white;
    &:hover {
        background-color: #ff534b;
    }
`;
