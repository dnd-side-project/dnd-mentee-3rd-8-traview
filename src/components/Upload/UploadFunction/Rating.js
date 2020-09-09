import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { SubtitleFont } from '../UploadStyled';
import styled from 'styled-components';

export const RatingFont = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
`;

function Rating(props) {
    const [value, setValue] = React.useState(props.rating);
    useEffect(() => {
        props.setHadRating(value);
    }, [value]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <SubtitleFont style={{ marginBottom: '31px' }}>
                평점 주기
            </SubtitleFont>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <RadioGroup
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label={<RatingFont>별로야</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label={<RatingFont>그저그래</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label={<RatingFont>괜찮아</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label={<RatingFont>좋아</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="5"
                        control={<Radio color="primary" />}
                        label={<RatingFont>최고야</RatingFont>}
                        labelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default Rating;
