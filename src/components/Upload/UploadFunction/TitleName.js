import React, { useEffect, useState } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

function TitleName(props) {
    const [titleValue, setTitleValue] = useState(props.title);
    const [reviewValue, setReviewValue] = useState(props.review);
    const onChageTitle = (e) => {
        e.preventDefault();
        setTitleValue(e.target.value);
    };
    const onChageReview = (e) => {
        e.preventDefault();
        setReviewValue(e.target.value);
    };
    useEffect(() => {
        props.setHadReview(reviewValue);
        props.setHadTitlename(titleValue);
    }, [reviewValue, titleValue]);
    return (
        <form style={{ width: '100%', height: '100%' }}>
            <Input
                placeholder="제목"
                style={{ width: '100%', height: '11%', color: '#ffffff' }}
                value={titleValue}
                onChange={onChageTitle}
            />
            <TextField
                style={{
                    color: '#ffffff',
                    width: '100%',
                    marginTop: '21px',
                    borderRadius: '10px',
                    boxSizing: 'border-box',
                    border: '2px solid #979797',
                }}
                id="outlined-multiline-static"
                multiline
                rows={17}
                placeholder="리뷰 적기..."
                variant="outlined"
                value={reviewValue}
                onChange={onChageReview}
            />
        </form>
    );
}

export default TitleName;
