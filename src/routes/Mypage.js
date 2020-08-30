import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import Mypost from '../components/Mypage/Mypost';
const Container = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 14px;
    margin-top: -20px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 787px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 100) 0,
            rgba(25, 25, 25, 0) 20%,
            rgba(25, 25, 25, 0) 20%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 50) 100%
        ),
        url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
`;

function Mypage() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <>
            <Container>
                <BackgroundImage
                    bg={
                        'https://3.bp.blogspot.com/-5CMGxobN0Ek/XCTD5BahEyI/AAAAAAAAy6I/7rzP7GFFkd8KXYLKlSS6cr6Zuyx3_K1TwCLcBGAs/s1600/Screen%2BShot%2B2018-12-27%2Bat%2B7.21.53%2BAM.png'
                    }
                />
            </Container>
            <Mypost />
        </>
    );
}

export default Mypage;
