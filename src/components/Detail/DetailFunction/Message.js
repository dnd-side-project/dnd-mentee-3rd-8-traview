import React from 'react';
import styled from 'styled-components';
import Avartar from './Avartar';
// const Avartar = styled.div`
//     border-radius: 20px;
//     width:40px;
//     height:40px;
//     background-image: url(${(props) => props.bg});
//     background-size: cover;
//     background-position: center center;
//     background repeat: no-repeat;
//     margin-right:20px;
// `;
const UserMessage = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
`;

function Message(props) {
    return (
        <div
            style={{
                display: 'flex',
                marginBottom: '40px',
                alignItems: 'center',
            }}
        >
            <Avartar uid={props.uid} Type="comment" />
            <UserMessage style={{ marginRight: '20px' }}>
                {props.user}
            </UserMessage>
            <UserMessage style={{ fontWeight: 300 }}>
                {props.message}
            </UserMessage>
        </div>
    );
}

export default Message;
