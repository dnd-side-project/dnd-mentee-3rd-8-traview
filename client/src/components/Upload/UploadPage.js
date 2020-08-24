import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
    TotalContainer,
    UploadDropZone,
    RightContainer,
    TitleInputBar,
    AdvertisementComponent,
    AtmosphereComponent,
    LocationComponent,
    RatingComponent,
} from './UploadStyled';
import Dropzone from './UploadFunction/Dropzone';
import TitleName from './UploadFunction/TitleName';
import Advertisement from './UploadFunction/advertisement';
import Atmosphere from './UploadFunction/Atmosphere';
import Rating from './UploadFunction/Rating';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
export default function UploadPage(props) {
    return (
        <Dialog
            scroll={'body'}
            maxWidth={false}
            open={props.open}
            onClose={props.close}
            aria-labelledby="form-dialog-title"
            PaperProps={{
                style: {
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    color: '#000000;',
                },
            }}
        >
            {/*<DialogTitle id="form-dialog-title">최악의 세대</DialogTitle>*/}
            <>
                <TotalContainer style={{ paddingTop: '30px' }}>
                    <UploadDropZone>
                        <Dropzone />
                    </UploadDropZone>
                    <RightContainer>
                        <TitleInputBar>
                            <TitleName />
                        </TitleInputBar>
                        <AdvertisementComponent>
                            <Advertisement />
                        </AdvertisementComponent>
                        <AtmosphereComponent>
                            <Atmosphere />
                        </AtmosphereComponent>
                        <LocationComponent></LocationComponent>
                        <RatingComponent>
                            <Rating />
                        </RatingComponent>
                    </RightContainer>

                    <ClearTwoToneIcon
                        fontSize="large"
                        style={{
                            cursor: 'pointer',
                            marginTop: '-20px',
                            marginRight: '-15px',
                        }}
                        onClick={props.close}
                    />
                </TotalContainer>
                <div
                    style={{
                        width: '100%',
                        height: '121px',
                    }}
                >
                    <Button
                        style={{
                            border: 'none',
                            width: '140px',
                            height: '70px',
                            background: '#ff534b',
                            borderRadius: '35px',
                            fontFamily: 'Noto Sans KR',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '35px',
                            lineHeight: '51px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#ffffff',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        완료
                    </Button>
                </div>
            </>
        </Dialog>
    );
}
