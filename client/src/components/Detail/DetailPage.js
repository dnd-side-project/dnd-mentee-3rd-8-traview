import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
import {
    AvatarComponent,
    FollowButton,
    Follower,
    NameLabel,
    ProfileImage,
    ProfileRight,
} from './DetailFunction/Profile';
import {
    CountNumber,
    DetailContent,
    InterBox,
    PostName,
} from './DetailFunction/Article';
import Like from './DetailFunction/Like';
import KakaoMap from './DetailFunction/KakaoMap';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import ShowMoreText from 'react-show-more-text';
export default function DetailPage(props) {
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    };
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
                                <img
                                    src={props.imageUrl}
                                    alt={'사진'}
                                    style={{
                                        width: '680px',
                                        borderRadius: '20px',
                                    }}
                                />
                            </ImageContainer>
                            <DataContainer>
                                <ProfileContainer>
                                    <AvatarComponent>
                                        <ProfileImage src={props.avatar} />
                                    </AvatarComponent>
                                    <ProfileRight>
                                        <NameLabel>{props.username}</NameLabel>
                                        <Follower>팔로워 {'팔로워수'}</Follower>
                                        <FollowButton>팔로우</FollowButton>
                                    </ProfileRight>
                                </ProfileContainer>
                                <MapContainer>
                                    <KakaoMap
                                        username={props.username}
                                        latitude={props.latitude}
                                        longitude={props.longitude}
                                        address={props.address}
                                    />
                                    {/* 여기는 카카오맵 넣어주시면 됩니다. */}
                                    {/* <KaKaoMap /> */}
                                </MapContainer>
                            </DataContainer>
                        </LeftContainer>
                        <RightContainer>
                            <ArticleContainer>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <PostName>{props.title}</PostName>
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            display: 'flex',
                                        }}
                                    >
                                        <InterBox
                                            bg={'/images/Interesting.png'}
                                        />
                                        <CountNumber>
                                            {props.novelty}
                                        </CountNumber>
                                        <InterBox bg={'/images/Like.png'} />
                                        <CountNumber>{props.heart}</CountNumber>
                                        {/*이모티콘*/}
                                        <ClearTwoToneIcon
                                            fontSize="large"
                                            style={{
                                                cursor: 'pointer',
                                                marginTop: '-20%',
                                                marginRight: '-28px',
                                            }}
                                            onClick={props.close}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ position: 'flex' }}>
                                        <DetailContent>
                                            <ShowMoreText
                                                width={500}
                                                /* Default options */
                                                lines={8}
                                                more={
                                                    <ExpandMoreIcon fontSize="large" />
                                                }
                                                less={<ExpandLessIcon />}
                                                anchorClass=""
                                                onClick={executeOnClick}
                                                expanded={false}
                                            >
                                                {props.review}
                                            </ShowMoreText>
                                        </DetailContent>
                                    </div>
                                </div>
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
