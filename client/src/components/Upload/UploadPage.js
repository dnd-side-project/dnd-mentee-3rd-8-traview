import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
    TotalContainer,
    UploadDropZone,
    RightContainer,
    TitleInputBar,
    CompleteButton,
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
                </TotalContainer>
                <CompleteButton> 완료</CompleteButton>
            </>
        </Dialog>
    );
}
