import React from 'react';
import styled from 'styled-components';

const Avartar = styled.div`
    border-radius: 20px;
    width:40px;
    height:40px;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    background repeat: no-repeat;
    margin-right:20px;
`;
const User_message = styled.p`
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
            <Avartar bg={props.userImage} />

            <User_message style={{ marginRight: '20px' }}>
                {props.user}
            </User_message>
            <User_message style={{ fontWeight: 300 }}>
                {props.message}
            </User_message>
            {/*<h4>*/}
            {/*    {props.user}*/}
            {/*    <span>{new Date(props.timestamp?.toDate()).toUTCString()}</span>*/}
            {/*</h4>*/}
            {/*<p> {props.message}</p>*/}
        </div>
    );
}

export default Message;
