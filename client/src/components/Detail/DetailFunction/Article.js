import React from 'react';
import styled from 'styled-components';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import ShowMoreText from 'react-show-more-text';
const PostName = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.768px;
    color: #ffffff;
`;
const InterBox = styled.div`
    margin-right: 12px;
    width: 35px;
    height: 30px;
    background-image: url(${(props) => props.bg});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 5%;
`;
const CountNumber = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    margin-right: 25px;
    margin-top: 5%;
`;
const DetailContent = styled.div`
    margin-top: 3%;
    width: 100%;
    height: 310px;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
    overflow: hidden;
    overflow-y: auto;
`;
function Article(props) {
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    };
    let example =
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 ' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머' +
        '님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. ' +
        '새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '별 어머님, 보고, 별 하나에 있습니다. 새겨지는 어머니, 애기 시인의 어' +
        '머니 봅니다. 별에도 슬퍼하는 나는 사람들의 하나 나의 무성할 동경과 까닭입니다. 아름다운' +
        ' 가을 별빛이 이름자를 말 불러 버리었습니다. 가난한 그리워 둘 때 불러 있습니다. 쉬이 이' +
        '국 까닭이요, 옥 이런 우는 까닭입니다. 헤는 덮어 별이 프랑시스 쓸쓸함과 위에도 봄이' +
        ' 벌써 거외다. 아이들의 벌레는 그리고 별 위에 이네들은 했던 슬퍼하는 별 까닭입니다. ' +
        '많은 다 불러 쉬이 이국 멀리 밤이 있습니다.';
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/*이모티콘*/}
                <PostName>한국 안의 휴양지</PostName>
                <div
                    style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        display: 'flex',
                    }}
                >
                    <InterBox bg={'/images/Interesting.png'} />
                    <CountNumber>432</CountNumber>
                    <InterBox bg={'/images/Like.png'} />
                    <CountNumber>432</CountNumber>
                    {/*이모티콘*/}
                    <ClearTwoToneIcon
                        fontSize="large"
                        style={{
                            cursor: 'pointer',
                            marginTop: '-20%',
                            marginRight: '-10%',
                        }}
                        onClick={props.close}
                    />
                </div>
            </div>
            <div style={{ position: 'flex' }}>
                <DetailContent>
                    <ShowMoreText
                        /* Default options */
                        lines={8}
                        more="더보기"
                        less="줄이기"
                        anchorClass=""
                        onClick={executeOnClick}
                        expanded={false}
                    >
                        {example}
                    </ShowMoreText>
                </DetailContent>
            </div>
        </div>
    );
}

export default Article;
