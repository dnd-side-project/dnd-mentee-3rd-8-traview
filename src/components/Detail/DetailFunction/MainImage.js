import React from 'react';
function MainImage(props) {
    return (
        <div>
            <img
                src={props.imagePath}
                alt={'사진'}
                style={{
                    width: '680px',
                    height: '870px',
                    borderRadius: '20px',
                }}
            />
        </div>
    );
}
export default MainImage;
