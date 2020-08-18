import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styled from 'styled-components';
import {
    ArticleContainer,
    CommentContainer,
    DataContainer,
    GraphLikeContainer,
    GraphContainer,
    ImageContainer,
    LeftContainer,
    LikeContainer,
    MainContentContainer,
    MapContainer,
    ProfileContainer,
    RelativeContainer,
    RightContainer,
    TotalContainer,
} from './DetailStyle';
import Profile from './DetailFunction/Profile';
import MainImage from './DetailFunction/MainImage';
import Article from './DetailFunction/Article';
import Like from './DetailFunction/Like';
import KakaoMap from './DetailFunction/KakaoMap';

const DialogBody = styled(DialogContent)`
    background: rgba(64, 64, 64, 0.7);
    backdrop-filter: blur(30px);
    border-radius: 20px;
    margin: -15px;
    font-family: Noto Sans KR;
    font-style: normal;
    color: #ffffff;
`;
export default function DetailPage(props) {
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
            <DialogBody>
                <TotalContainer>
                    <MainContentContainer>
                        <LeftContainer>
                            <ImageContainer>
                                {/* 이곳에 짱큰 이미지 넣어주시면 됩니다. */}
                                <MainImage imagePath={props.imagePath} />
                            </ImageContainer>
                            <DataContainer>
                                <ProfileContainer>
                                    <Profile
                                        profileImage={'/images/Avatar1.png'}
                                        follower={'142'}
                                    />
                                </ProfileContainer>
                                <MapContainer>
                                    <KakaoMap />
                                    {/* 여기는 카카오맵 넣어주시면 됩니다. */}
                                    {/* <KaKaoMap /> */}
                                </MapContainer>
                            </DataContainer>
                        </LeftContainer>
                        <RightContainer>
                            <ArticleContainer>
                                <Article close={props.close} />
                                {/*본문 컴포넌트*/}
                                {/* 이곳에 제목 글 작성날자 등 들어갑니다. */}
                                {/* <Article /> */}
                            </ArticleContainer>
                            <CommentContainer>
                                덧글 컴포넌트
                                {/* 이곳에 덧글 들어갑니다. */}
                                {/* <Comment /> */}
                            </CommentContainer>
                            <GraphLikeContainer>
                                <GraphContainer>
                                    그래프 컴포넌트
                                    {/* 이곳에 그래프 들어갑니다. */}
                                    {/* <Graph /> */}
                                </GraphContainer>
                                <LikeContainer>
                                    <Like />
                                </LikeContainer>
                            </GraphLikeContainer>
                        </RightContainer>
                    </MainContentContainer>
                    <RelativeContainer>
                        관련글 컴포넌트
                        {/* 이곳에 주변사진들 비슷한 분위기 들어갑니다. */}
                        {/* <주변사진들 /> */}
                        {/* <비슷한 사진들 /> */}
                    </RelativeContainer>
                </TotalContainer>
            </DialogBody>
            <DialogActions>
                <Button item xs={3} onClick={props.close} color="primary">
                    Cancel
                </Button>
                <Button variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );
}
