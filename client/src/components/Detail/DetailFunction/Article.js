import React from 'react';
import styled from 'styled-components';
export const PostName = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.768px;
    color: #ffffff;
`;
export const InterBox = styled.div`
    margin-right: 12px;
    width: 35px;
    height: 30px;
    background-image: url(${(props) => props.bg});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 5%;
`;
export const CountNumber = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    margin-right: 25px;
    margin-top: 5%;
`;
export const DetailContent = styled.div`
    margin-top: 3%;
    width: 100%;
    height: 320px;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    display: flex;

    color: #ffffff;
    overflow: hidden;
    overflow-y: auto;
`;
// function Article(props) {
//     const executeOnClick = (isExpanded) => {
//         console.log(isExpanded);
//     };
//     let example = '123213213123213';
//
//     return (
//         <div>
//             <div style={{ position: 'flex' }}>
//                 <DetailContent>
//                     <ShowMoreText
//                         /* Default options */
//                         lines={8}
//                         more="더보기"
//                         less="줄이기"
//                         anchorClass=""
//                         onClick={executeOnClick}
//                         expanded={false}
//                     >
//                         {example}
//                     </ShowMoreText>
//                 </DetailContent>
//             </div>
//         </div>
//     );
// }
