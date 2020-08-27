import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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

export default function DetailPage(props) {
    return (
        <Dialog
            scroll={'body'}
            maxWidth={false}
            open={props.open}
            onClose={props.close}
            aria-labelledby="form-dialog-title"
            PaperProps={{
                style: {
                    backgroundColor: 'rgba(64, 64, 64, 0.7)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                },
            }}
        >
            {/*<DialogTitle id="form-dialog-title">최악의 세대</DialogTitle>*/}
            <DialogContent>
                <TotalContainer>
                    <MainContentContainer>
                        <LeftContainer>
                            <ImageContainer>
                                {/* 이곳에 짱큰 이미지 넣어주시면 됩니다. */}
                                <MainImage imagePath={props.imageUrl} />
                            </ImageContainer>
                            <DataContainer>
                                <ProfileContainer>
                                    <Profile
                                        profileImage={'/images/Avatar1.png'}
                                        follower={'142'}
                                    />
                                </ProfileContainer>
                                <MapContainer>
                                    <KakaoMap
                                        Latitude={props.Latitude}
                                        longitude={props.longitude}
                                    />
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
            </DialogContent>
            <DialogActions>
                {/*원래버튼있던자리 지만 저희 기능에선 사용할거없음*/}
            </DialogActions>
        </Dialog>
    );
}
