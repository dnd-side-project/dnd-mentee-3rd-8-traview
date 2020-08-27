import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { CommentButton, RightContainer } from '../DetailStyle';

function ChatInput(props) {
    const [titleValue, setTitleValue] = useState(null);
    const onChageTitle = (e) => {
        e.preventDefault();
        setTitleValue(e.target.value);
    };
    // const CommentSubmit = (e) => {
    //     e.preventDefault();
    // };
    return (
        <div
            style={{
                display: 'flex',
                marginTop: '30px',
                width: '100%',
                height: '46px',
                borderRadius: '29.5px',
                boxSizing: 'border-box',
                border: '1px solid #FFFFFF',
            }}
        >
            <Input
                placeholder="댓글 쓰기"
                inputProps={{ 'aria-label': 'description' }}
                style={{
                    color: 'white',
                    paddingLeft: '15px',
                    width: '85%',
                    height: '46px',
                }}
                value={titleValue}
                onChange={onChageTitle}
            />
            <CommentButton>게시</CommentButton>
        </div>
    );
}

export default ChatInput;
