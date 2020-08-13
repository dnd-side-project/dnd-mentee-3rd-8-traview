import styled from 'styled-components';

export const MainTheme = styled.div`
    overflow: hidden;
    text-align: center;
    font-style: normal;
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
`;
