import styled from 'styled-components';
export const TotalContainer = styled.div`
    height: auto;
    width: 1300px;
`;

export const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    width: 1280px;
    min-height: 500px;
    max-height: 1186px;
`;

export const LeftContainer = styled.div`
    flex-direction: column;
    align-items: center;
    width: 680px;
`;

export const RightContainer = styled.div`
    flex-direction: column;
    width: 550px;
    margin-left: 40px;
`;

export const ImageContainer = styled.div`
    width: 680px;
    position: relative;
`;
export const CommentButton = styled.button`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    width: 54px;
    color: #ff534b;
    background: none;
    border: none;
    marginleft: 20px;
    outline: none;
    justify-content: flex-end;
    margin-left: 20px;
    cursor: pointer;
`;
export const LeftBottomContainer = styled.div`
    position: absolute;
    left: 12px;
    bottom: 10px;
    display: flex;

    align-items: center;
`;
export const TextBox = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
`;
export const LeftTopContainer = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    display: flex;
    align-items: center;
`;

export const Countbox = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    color: #ffffff;
`;
export const RightBottomContainer = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    align-items: center;
`;
export const RightTopContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 12px;
    display: flex;
    align-items: center;
`;
export const CommentBox = styled.div`
    ::-webkit-scrollbar {
        display: none;
    }
`;
