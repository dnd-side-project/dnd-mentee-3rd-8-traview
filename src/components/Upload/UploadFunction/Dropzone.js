import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    DropZoneArea: {
        height: '100%',
        border: '4px dashed #979797',
        boxSizing: 'border-box',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto 0',
        backgroundColor: 'transparent',
    },
    DropzoneParagrap: {
        fontFamily: 'Noto Sans KR',
        fontStyle: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    colorq: {
        display: 'flex',
        marginTop: '50px',
    },
}));
// const UploadTitle = styled.p`
//     color: #000000;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 26px;
//     display: flex;
// `;
// const Upload = styled.p`
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 35px;
//     color: #ff534b;
//
function Dropzone(props) {
    const classes = useStyles();
    const onDrop = (file) => {
        props.setHadImageurl(file[0]);
    };
    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <DropzoneArea
                onDrop={onDrop}
                dropzoneClass={classes.DropZoneArea}
                dropzoneParagraphClass={classes.DropzoneParagrap}
                Icon=""
                dropzoneText={
                    '업로드'
                    // <div style={{ textAlign: 'center' }}>
                    //     <img src={'/images/UPLOADTEST.png'} alt="NewPick" />
                    //     <UploadTitle>여행지 사진을 올려주세요</UploadTitle>
                    //     <Upload>사진 업로드</Upload>
                    // </div>
                }
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                showPreviewsInDropzone={false}
                useChipsForPreview //사진이 아니라 이름으로 보여주기 위함
                previewText="Selected files"
                filesLimit={1} //파일 갯수
                // previewGridProps={{
                //     //업로드시 아래 select 파일 이라고 뜨는것
                //     container: { spacing: 1, direction: 'row' },
                // }}
                //  previewChipProps={{ classes: { root: classes.previewChip } }}
            />
        </div>
    );
}

export default Dropzone;
