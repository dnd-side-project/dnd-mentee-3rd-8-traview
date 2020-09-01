import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import { DropzoneArea } from 'material-ui-dropzone';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';
const useStyles = makeStyles((theme) => ({
    DropZoneArea: {
        height: '558px',
        width: '1142px',
        border: '4px dashed #FFFFFF;',
        boxSizing: 'border-box',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto 0',
        background: 'none',
    },
    DropzoneParagrap: {
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '26px',
        lineHeight: '38px',
    },
    AvatarDropZoneArea: {
        height: '295px',
        width: '295px',
        border: '4px dashed #FFFFFF;',
        borderRadius: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto 0',
        background: 'none',
        marginRight: '100px',
    },
    AvatarDropzoneParagrap: {
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '29px',
    },
    Introduction: {
        width: '60%',
        height: '295px',
        display: 'flex',
    },
    InputOption: {
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#FFFFFF',
    },
    PlaceOption: {
        fontSize: '30px',
        lineHeight: '43px',
        color: '#979797',
    },
    UpdateBtn: {
        width: '110px',
        height: '50px',
        background: '#FF534B',
        borderRadius: '35px',
        fontWeight: 500,
        fontSize: '30px',
        lineHeight: '43px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
    },
}));

const TotalContainer = styled.div`
    width: 1300px;
    height: 1100px;
    display: flex;
    justify-content: center;
`;
// isIntroduction={userInfo.user.introduction} //소개
// isBackground={userInfo.user.background} //백그라운드
// isAvartar={userInfo.user.photoURL} //아바타
function Edit(props) {
    const onDrop = (file) => {};
    const classes = useStyles();
    const [isAvartar, setIsAvartar] = useState(props.isAvartar);
    const [isBackground, setIsbackground] = useState(props.isBackground);
    const [isIntroduction, setIsIntroduction] = useState(props.isIntroduction);
    const [{ user }] = useStateValue();

    useEffect(() => {
        setIsIntroduction(props.isIntroduction);
        setIsbackground(props.isBackground);
        setIsAvartar(props.isAvartar);
    }, [props.close]);
    const onChageTitle = (e) => {
        e.preventDefault();
        setIsIntroduction(e.target.value);
    };
    const onClickChange = (e) => {
        e.preventDefault();
        if (isIntroduction === '') {
            alert('소개글을 입력해주세요');
        } else {
            let userInfoChange = db.collection('users').doc(user.uid);
            userInfoChange
                .update({
                    introduction: isIntroduction,
                })
                .then((temp) => console.log('success', temp));
            props.setIsAvartar(isAvartar);
            props.setIsBackground(isBackground);
            props.setIsIntroduction(isIntroduction);
            alert('게시물이 수정되었습니다.');
            props.close();
        }
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
                    background: '#262626',
                    borderRadius: '20px',
                    backdropFilter: 'blur(30px)',
                    color: '#000000',
                },
            }}
        >
            <TotalContainer>
                <div style={{ marginLeft: '10px' }}>
                    <div>
                        <div //가장위 close
                            style={{
                                width: '100%',
                                height: '53px',
                                float: 'right',
                            }}
                        >
                            <ClearTwoToneIcon
                                fontSize="large"
                                style={{
                                    float: 'right',
                                    cursor: 'pointer',
                                    color: 'white',
                                    marginRight: '-20px',
                                }}
                                onClick={props.close}
                            />
                        </div>
                        <div
                            style={{
                                width: '1220px',
                                height: '100%',
                            }}
                        >
                            <DropzoneArea
                                onDrop={onDrop}
                                dropzoneClass={classes.DropZoneArea}
                                dropzoneParagraphClass={
                                    classes.DropzoneParagrap
                                }
                                Icon=""
                                dropzoneText={'배경사진 올리기'}
                                acceptedFiles={[
                                    'image/jpeg',
                                    'image/png',
                                    'image/bmp',
                                ]}
                                showPreviews={true}
                                showPreviewsInDropzone={false}
                                useChipsForPreview //사진이 아니라 이름으로 보여주기 위함
                                filesLimit={1} //파일 갯수
                            />
                        </div>
                    </div>
                    {/*상단 드롭존*/}
                    {/*하단Avartar 드롭존*/}
                    <div style={{ marginTop: '41px', display: 'flex' }}>
                        <DropzoneArea
                            onDrop={onDrop}
                            dropzoneClass={classes.AvatarDropZoneArea}
                            dropzoneParagraphClass={
                                classes.AvatarDropzoneParagrap
                            }
                            Icon=""
                            dropzoneText={'프로필사진 올리기'}
                            acceptedFiles={[
                                'image/jpeg',
                                'image/png',
                                'image/bmp',
                            ]}
                            showPreviews={true}
                            showPreviewsInDropzone={false}
                            useChipsForPreview //사진이 아니라 이름으로 보여주기 위함
                            filesLimit={1} //파일 갯수
                        />
                        <TextField
                            onChange={onChageTitle}
                            value={isIntroduction}
                            autoFocus={true}
                            InputProps={{
                                className: classes.InputOption,
                            }}
                            InputLabelProps={{
                                className: classes.PlaceOption,
                            }}
                            id="outlined-multiline-static"
                            multiline
                            rowsMax={10}
                            rows={10}
                            placeholder="내 소개를 적어주세요"
                            variant="outlined"
                            className={classes.Introduction}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '70px',
                        }}
                    >
                        <Button
                            className={classes.UpdateBtn}
                            onClick={onClickChange}
                        >
                            게시
                        </Button>
                    </div>
                </div>
            </TotalContainer>
        </Dialog>
    );
}

export default Edit;
