import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import PublishIcon from '@material-ui/icons/Publish';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/core';

function Dropzone() {
    // const useStyles = makeStyles((theme) =>
    //     createStyles({
    //         previewChip: {
    //             minWidth: '100%',
    //             maxWidth: '100%',
    //         },
    //     })
    // );
    //const classes = useStyles();
    return (
        <DropzoneArea
            Icon={PublishIcon}
            dropzoneText="업로드"
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
    );
}

export default Dropzone;
