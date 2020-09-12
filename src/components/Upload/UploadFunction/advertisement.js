import React from 'react';
import { SubtitleFont } from '../UploadStyled';
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components';

export const RadioFont = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    align-items: center;
    text-align: center;
    display: flex;
`;
//selectedValue에 yes or no 에 값이 찍여있다.
function Advertisement(props) {
    const [selectedValue, setSelectedValue] = React.useState(
        props.advertising ? 'NO' : 'YES'
    );

    const handleChange = (event) => {
        setSelectedValue(event.target.value);

        //console.log(selectedValue);
        props.setHasSelectedadvertisement(
            selectedValue === 'YES' ? true : false
        );
    };
    return (
        <div style={{ display: 'flex' }}>
            <SubtitleFont>광고가 포함되어있나요</SubtitleFont>
            <div style={{ display: 'flex', marginLeft: '20px' }}>
                <Radio
                    checked={selectedValue === 'NO'}
                    onChange={handleChange}
                    value="NO"
                    name="no_Radio"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <RadioFont> 예 </RadioFont>
                <Radio
                    style={{ marginLeft: '60px' }}
                    checked={selectedValue === 'YES'}
                    onChange={handleChange}
                    value="YES"
                    name="yes_Radio"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <RadioFont>아니요</RadioFont>
            </div>
        </div>
    );
}

export default Advertisement;
