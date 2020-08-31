import React from 'react';
import { Button } from '@material-ui/core';
import { actionTypes } from '../reducer';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
const Toptitle = styled.h1`
    font-weight: 500;
    font-size: 70px;
    line-height: 101px;
    letter-spacing: -1.4px;
    color: #ffffff;
    //  margin-top: 20%;
`;
const MiddleTitle = styled.h2`
    font-weight: normal;
    font-size: 40px;
    line-height: 58px;
`;
function DefaultArea(props) {
    const [, dispatch] = useStateValue();
    return (
        <div>
            <div
                style={{
                    alignItem: 'center',
                    textAlign: 'center',
                    marginTop: '10%',
                }}
            >
                <Toptitle>
                    검색결과가 없습니다
                    <img
                        style={{ marginLeft: '25px' }}
                        src="/images/emoticon.png"
                        alt="이모티콘"
                    />
                </Toptitle>

                <MiddleTitle>다른 지역을 검색해 보세요</MiddleTitle>
                <Button
                    style={{
                        marginTop: '3%',
                        width: '215px',
                        height: '45px',
                        border: '2px solid #F45149',
                        boxSizing: 'border-box',
                        borderRadius: '28px',
                        fontSize: '26px',
                        fontWeight: 'normal',
                        lineHeight: '38px',
                        letterSpacing: '-0.52px',
                        color: '#FFFFFF',
                    }}
                    onClick={() => {
                        dispatch({
                            type: actionTypes.SET_SERACH_TERM,
                            term: '부산',
                        });
                    }}
                >
                    다른지역 보기
                </Button>
            </div>
        </div>
    );
}

export default DefaultArea;
