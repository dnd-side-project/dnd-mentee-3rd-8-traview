import React, { useState } from 'react';
import styled from 'styled-components';
import { SubtitleFont } from '../UploadStyled';
const MoodList = styled.div`
    display: flex;
    margin-top: 20px;
`;
const Mood = styled.button`
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

function Atmosphere() {
    const [City, setCity] = useState(false);
    const [nature, setnature] = useState(false);
    const [Dream, setDream] = useState(false);
    // const [relaxation, setrelaxation] = useState(false);
    // const [calm, setcalm] = useState(false);
    // const [vigor, setvigor] = useState(false);
    // const [romance, setromance] = useState(false);
    //임시로냅둡
    return (
        <div>
            <SubtitleFont> 분위기 선택</SubtitleFont>
            <MoodList>
                <Mood
                    style={{
                        backgroundColor: City ? '#ff534b' : 'white',
                        // color: `${City ? 'black' : 'red'}`,
                    }}
                    onClick={() => {
                        setCity(!City);
                    }}
                >
                    도시
                </Mood>
                <Mood
                    style={{
                        backgroundColor: nature ? '#ff534b' : 'white',
                        // color: `${City ? 'black' : 'red'}`,
                    }}
                    onClick={() => {
                        setnature(!nature);
                    }}
                >
                    자연
                </Mood>
                <Mood
                    style={{
                        backgroundColor: Dream ? '#ff534b' : 'white',
                        // color: `${City ? 'black' : 'red'}`,
                    }}
                    onClick={() => {
                        setDream(!Dream);
                    }}
                >
                    몽환
                </Mood>
                <Mood>여유</Mood>
                <Mood>고요</Mood>
                <Mood>활기</Mood>
                <Mood>낭만</Mood>
            </MoodList>
        </div>
    );
}
export default Atmosphere;
