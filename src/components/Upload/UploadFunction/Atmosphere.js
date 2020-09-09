import React, { useEffect } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import { SubtitleFont } from '../UploadStyled';
const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '40px',
        marginRight: '12px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
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
export default function ToggleButtons(props) {
    const classes = useStyles();

    const [alignment, setAlignment] = React.useState(props.mood);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    useEffect(() => {
        props.setHadAtmophere(alignment);
    },[alignment]);

    return (
        <div>
            <SubtitleFont> 분위기 선택</SubtitleFont>
            <MoodList>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton
                        className={classes.root}
                        style={{
                            backgroundColor:
                                alignment === '도시' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '도시' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        value="도시"
                        aria-label="left aligned"
                    >
                        도시
                    </ToggleButton>
                    <ToggleButton
                        value="자연"
                        aria-label="left aligned"
                        style={{
                            backgroundColor:
                                alignment === '자연' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '자연' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                    >
                        자연
                    </ToggleButton>
                    <ToggleButton
                        style={{
                            backgroundColor:
                                alignment === '몽환' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '몽환' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                        value="몽환"
                        aria-label="left aligned"
                    >
                        몽환
                    </ToggleButton>
                    <ToggleButton
                        style={{
                            backgroundColor:
                                alignment === '여유' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '여유' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                        value="여유"
                        aria-label="left aligned"
                    >
                        여유
                    </ToggleButton>
                    <ToggleButton
                        style={{
                            backgroundColor:
                                alignment === '고요' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '고요' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                        value="고요"
                        aria-label="left aligned"
                    >
                        고요
                    </ToggleButton>
                    <ToggleButton
                        style={{
                            backgroundColor:
                                alignment === '활기' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '활기' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                        value="활기"
                        aria-label="left aligned"
                    >
                        활기
                    </ToggleButton>
                    <ToggleButton
                        style={{
                            backgroundColor:
                                alignment === '낭만' ? '#ff534b' : 'white',
                            color: `${
                                alignment === '낭만' ? 'white' : '#FF534B'
                            }`,
                            borderRadius: '40px',
                            border: '2px solid #ff534b',
                        }}
                        className={classes.root}
                        value="낭만"
                        aria-label="left aligned"
                    >
                        낭만
                    </ToggleButton>
                </ToggleButtonGroup>
            </MoodList>
        </div>
    );
}
