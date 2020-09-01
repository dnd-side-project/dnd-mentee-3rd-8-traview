import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import { DropzoneArea } from 'material-ui-dropzone';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
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
function Edit(props) {
    const [backroundFile, setBackroundFile] = useState(null);
    const onDrop = (file) => {};
    const classes = useStyles();
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
                        <Button className={classes.UpdateBtn}>게시</Button>
                    </div>
                </div>
            </TotalContainer>
        </Dialog>
    );
}

export default Edit;
