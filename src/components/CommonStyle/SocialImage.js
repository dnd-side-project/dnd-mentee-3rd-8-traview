import styled from 'styled-components';

export const SocialImage = styled.div`
    width: 68px;
    height: 68px;
    margin: 0px auto;
    background-image: url(${(props) => props.bg});
    background size: cover;
     background-position: center center;
    background repeat: no-repeat;
`;
