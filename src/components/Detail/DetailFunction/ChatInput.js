import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { CommentButton } from '../DetailStyle';
import db from '../../../firebase';
import firebase from 'firebase/app';
import { useStateValue } from '../../../StateProvider';
function ChatInput(props) {
    const [{ user }] = useStateValue();
    const [commentValue, setCommentValue] = useState(null);

    const onChageTitle = (e) => {
        e.preventDefault();
        setCommentValue(e.target.value);
    };
    var blank_pattern = /^\s+|\s+$/g;
    const sendMessage = (e) => {
        e.preventDefault();
        if (!user) {
            alert('로그인 후의 이용바랍니다');
        } else if (commentValue === '' || commentValue === null) {
            alert('댓글을 작성해주세요');
        } else if (commentValue.replace(blank_pattern, '') === '') {
            alert(' 공백만 입력되었습니다 ');
        } else if (user) {
            if (props.id) {
                db.collection('posts').doc(props.id).collection('comment').add({
                    message: commentValue,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userimage: user.photoURL,
                });
            }
        }
        setCommentValue('');
    };

    return (
        <form
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
                value={commentValue}
                onChange={onChageTitle}
            />
            <CommentButton onClick={sendMessage}>게시</CommentButton>
        </form>
    );
}

export default ChatInput;
