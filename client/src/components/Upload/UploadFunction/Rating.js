import React from 'react';
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

function Rating() {
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
                >
                    <FormControlLabel
                        value="Rating1"
                        control={<Radio color="primary" />}
                        label={<RatingFont>별로야</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating2"
                        control={<Radio color="primary" />}
                        label={<RatingFont>그저그래</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating3"
                        control={<Radio color="primary" />}
                        label={<RatingFont>괜찮아</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating4"
                        control={<Radio color="primary" />}
                        label={<RatingFont>좋아</RatingFont>}
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating5"
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
