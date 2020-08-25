import React, { useState } from 'react';
import styled from 'styled-components';
import { SubtitleFont } from '../UploadStyled';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '40px',
        marginRight: '10px',
        borderStyle: 'solid',
        border: '2px solid #ff534b',
        boxSizing: 'border-box',
        borderRadius: '40px',
        cursor: 'pointer',
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '26px',
        display: 'flex',
        textAlign: 'center',
        letterSpacing: '-0.36px',
        backgroundColor: 'white',
    },
});

const MoodList = styled.div`
    display: flex;
    margin-top: 20px;
`;

function Atmosphere() {
    const classes = useStyles();
    const [City, setCity] = useState(false);
    const [nature, setnature] = useState(false);
    const [Dream, setDream] = useState(false);
    const [relaxation, setRelaxation] = useState(false);
    const [calm, setCalm] = useState(false);
    const [vigor, setvigor] = useState(false);
    const [romance, setromance] = useState(false);

    return (
        <div>
            <SubtitleFont> 분위기 선택</SubtitleFont>
            <MoodList>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: City ? '#ff534b' : 'white',
                        color: `${City ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setCity(!City);
                    }}
                >
                    도시
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: nature ? '#ff534b' : 'white',
                        color: `${nature ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setnature(!nature);
                    }}
                >
                    자연
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: Dream ? '#ff534b' : 'white',
                        color: `${Dream ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setDream(!Dream);
                    }}
                >
                    몽환
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: relaxation ? '#ff534b' : 'white',
                        color: `${relaxation ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setRelaxation(!relaxation);
                    }}
                >
                    여유
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: calm ? '#ff534b' : 'white',
                        color: `${calm ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setCalm(!calm);
                    }}
                >
                    고요
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: vigor ? '#ff534b' : 'white',
                        color: `${vigor ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setvigor(!vigor);
                    }}
                >
                    활기
                </Button>
                <Button
                    className={classes.root}
                    style={{
                        backgroundColor: romance ? '#ff534b' : 'white',
                        color: `${romance ? 'white' : '#FF534B'}`,
                    }}
                    onClick={() => {
                        setromance(!romance);
                    }}
                >
                    낭만
                </Button>
            </MoodList>
        </div>
    );
}
export default Atmosphere;
