import React from 'react';
import styled from 'styled-components';

const Avartar = styled.div`
    width:40px;
    height:40px;
    background-image: url(${(props) => props.bg});
      background-size: cover;
     background-position: center center;
    background repeat: no-repeat;
    
`;

function Message(props) {
    return (
        <div style={{ display: 'flex' }}>
            <Avartar bg={props.userImage} />
            <div>
                <h4>
                    {props.user}
                    <span>
                        {new Date(props.timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p> {props.message}</p>
            </div>
        </div>
    );
}

export default Message;
