import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Message from './DetailFunction/Message';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import db from '../../firebase';
import {
    ImageContainer,
    LeftContainer,
    MainContentContainer,
    RightContainer,
    TotalContainer,
} from './DetailStyle';
import { DetailContent, PostName } from './DetailFunction/Article';
import KakaoMap from './DetailFunction/KakaoMap';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import ShowMoreText from 'react-show-more-text';
import { SubtitleFont } from '../Upload/UploadStyled';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RatingFont } from '../Upload/UploadFunction/Rating';
import ChatInput from './DetailFunction/ChatInput';

export default function DetailPage(props) {
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (props.id) {
            db.collection('posts')
                .doc(props.id)
                .onSnapshot((snapShot) => setRoomDetails(snapShot.data()));
        }
        db.collection('posts')
            .doc(props.id)
            .collection('comment')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapShot) =>
                setRoomMessages(snapShot.docs.map((doc) => doc.data()))
            );
    }, [props.id]);
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
                            <PostName>{props.title}</PostName>
                            <DetailContent>
                                <ShowMoreText
                                    width={650}
                                    /* Default options */
                                    lines={8}
                                    more={<ExpandMoreIcon fontSize="large" />}
                                    less={<ExpandLessIcon />}
                                    anchorClass=""
                                    onClick={executeOnClick}
                                    expanded={false}
                                >
                                    {props.review}
                                </ShowMoreText>
                            </DetailContent>
                        </LeftContainer>
                        <RightContainer>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <p>평점그래프</p>
                                <div>
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
                            <div style={{ marginTop: '20px' }}>
                                <SubtitleFont style={{ marginBottom: '31px' }}>
                                    평점 주기
                                </SubtitleFont>
                                <FormControl
                                    component="fieldset"
                                    style={{ width: '100%' }}
                                >
                                    <RadioGroup
                                        style={{
                                            width: '100%',
                                            justifyContent: 'space-between',
                                        }}
                                        row
                                        aria-label="position"
                                        name="position"
                                        defaultValue="top"
                                        //  value={value}
                                        // onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio color="primary" />}
                                            label={
                                                <RatingFont>별로야</RatingFont>
                                            }
                                            labelPlacement="bottom"
                                        />
                                        <FormControlLabel
                                            value="2"
                                            control={<Radio color="primary" />}
                                            label={
                                                <RatingFont>
                                                    그저그래
                                                </RatingFont>
                                            }
                                            labelPlacement="bottom"
                                        />
                                        <FormControlLabel
                                            value="3"
                                            control={<Radio color="primary" />}
                                            label={
                                                <RatingFont>괜찮아</RatingFont>
                                            }
                                            labelPlacement="bottom"
                                        />
                                        <FormControlLabel
                                            value="4"
                                            control={<Radio color="primary" />}
                                            label={
                                                <RatingFont>좋아</RatingFont>
                                            }
                                            labelPlacement="bottom"
                                        />
                                        <FormControlLabel
                                            value="5"
                                            control={<Radio color="primary" />}
                                            label={
                                                <RatingFont>최고야</RatingFont>
                                            }
                                            labelPlacement="bottom"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div
                                style={{
                                    height: 'auto',
                                    minHeight: '35%',
                                    maxHeight: '65%',
                                    width: '100%',
                                    marginTop: '60px',
                                    overflow: 'auto',
                                }}
                            >
                                {roomMessages.map(
                                    ({
                                        message,
                                        timestamp,
                                        user,
                                        userimage,
                                    }) => (
                                        <Message
                                            message={message}
                                            timestamp={timestamp}
                                            user={user}
                                            userImage={userimage}
                                        />
                                    )
                                )}
                            </div>
                            {/*안풋바 */}
                            <ChatInput id={props.id} />
                        </RightContainer>
                    </MainContentContainer>
                </TotalContainer>
            </DialogContent>
            <DialogActions>
                {/*원래버튼있던자리 지만 저희 기능에선 사용할거없음*/}
            </DialogActions>
        </Dialog>
    );
}
