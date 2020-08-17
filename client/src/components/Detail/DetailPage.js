import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import KakaoMap from './KakaoMap';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import ShowMoreText from 'react-show-more-text';
const BestImage = styled.img`
    width: 650px;
    height: 870px;
    border-radius: 20px;
`;

const TopMain = styled.div`
    display: flex;
`;
const DIA = styled(DialogContent)`
    background: rgba(64, 64, 64, 0.7);
    backdrop-filter: blur(30px);
    border-radius: 20px;
    margin: -15px;
    font-family: Noto Sans KR;
    font-style: normal;
    color: #ffffff;
`;
const PostName = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    align-items: center;
    text-align: center;
    margin-right:
    letter-spacing: -0.768px;
    color: #ffffff;
    
`;

const InterBox = styled.div`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-right: 12px;
`;
const CountNumber = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    margin-right: 25px;
`;
const AvartarBox = styled.div`
    border: 2px solid #ff534b;
    box-sizing: border-box;
    border-radius: 60px;
    // margin-right: 3%;
`;
const Username = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
`;
const Follower = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #dbdbdb;
`;

const useStyles = makeStyles(() => ({
    large: {
        width: '110px',
        height: '110px',
    },
}));

const DetailContent = styled.div`
    margin-top: 3%;
    width: 600px;
    max-height: 315px;
    height: 150px;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
    overflow: hidden;
    overflow-y: auto;
`;

export default function DetailPage(props) {
    const classes = useStyles();
    let example =
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 ' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머' +
        '님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. ' +
        '새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '머니 봅니다. 별에도 슬퍼하는 나는 사람들의 하나 나의 무성할 동경과 까닭입니다. 아름다운' +
        ' 가을 별빛이 이름자를 말 불러 버리었습니다. 가난한 그리워 둘 때 불러 있습니다. 쉬이 이' +
        '국 까닭이요, 옥 이런 우는 까닭입니다. 헤는 덮어 별이 프랑시스 쓸쓸함과 위에도 봄이' +
        ' 벌써 거외다. 아이들의 벌레는 그리고 별 위에 이네들은 했던 슬퍼하는 별 까닭입니다. ' +
        '많은 다 불러 쉬이 이국 멀리 밤이 있습니다.';
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    };
    return (
        <Dialog
            maxWidth={'1300xs'}
            open={props.open}
            onClose={props.close}
            aria-labelledby="form-dialog-title"
            style={{
                borderRadius: '20px',
                padding: '1px',
            }}
        >
            {/*<DialogTitle id="form-dialog-title">최악의 세대</DialogTitle>*/}
            <DIA>
                <TopMain>
                    <div style={{ marginRight: '3px' }}>
                        <BestImage src={props.imagePath} alt={'사진'} />
                        <div
                            style={{
                                display: 'flex',
                                marginTop: '2%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <AvartarBox>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/images/Avatar2.png"
                                    className={classes.large}
                                />
                            </AvartarBox>

                            <div>
                                <Username>크리스 에반스</Username>
                                <Follower>팔로워 142명</Follower>
                                <Button
                                    size="medium"
                                    variant="contained"
                                    style={{
                                        lineHeight: '26px',
                                        fontStyle: 'normal',
                                        borderRadius: '50px',
                                        fontSize: '18px',
                                        color: '#FFFFFF',
                                        backgroundColor: ' #FF534B',
                                        marginTop: '3px',
                                    }}
                                >
                                    팔로우
                                </Button>
                            </div>
                            <div>
                                <KakaoMap
                                    mapControl1={props.mapControl1}
                                    mapControl2={props.mapControl2}
                                />
                                <button>카카오지도</button>
                            </div>
                        </div>
                    </div>
                    {/*여기부터 오른쪽*/}
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/*이모티콘*/}
                            <PostName>한국 안의 휴양지</PostName>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <InterBox>
                                    <img
                                        src="/images/Interesting.png"
                                        alt="Interesting"
                                    />
                                </InterBox>
                                <CountNumber>432</CountNumber>
                                <InterBox>
                                    <img
                                        src="/images/Like.png"
                                        alt="Interesting"
                                    />
                                </InterBox>
                                <CountNumber>432</CountNumber>
                                {/*이모티콘*/}
                                <ClearTwoToneIcon onClick={props.close} />
                            </div>
                        </div>
                        <div style={{ position: 'flex' }}>
                            <DetailContent>
                                <ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more="더보기"
                                    less="줄이기"
                                    anchorClass=""
                                    onClick={executeOnClick}
                                    expanded={false}
                                >
                                    {example}
                                </ShowMoreText>
                            </DetailContent>
                        </div>
                        <div style={{ marginTop: '4%' }}>
                            <textarea style={{ width: 400, height: 350 }}>
                                '댓글 ~ 미치겠다 ~ 우잉',
                            </textarea>
                        </div>
                    </div>
                </TopMain>
            </DIA>
            <DialogActions>
                <Button item xs={3} onClick={props.close} color="primary">
                    Cancel
                </Button>
                <Button variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );
}
