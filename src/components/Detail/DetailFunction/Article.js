import React from 'react';
import styled from 'styled-components';
export const PostName = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.768px;
    color: #ffffff;
    margin-top: 20px;
`;
export const DetailContent = styled.div`
    margin-top: 3%;
    width: 100%;
    height: auto;
    max-height: 320px;
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
