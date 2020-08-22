import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { SubtitleFont } from '../UploadStyled';

function Rating() {
    return (
        <div>
            <SubtitleFont style={{ marginBottom: '41px' }}>
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
                        label="별로야"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating2"
                        control={<Radio color="primary" />}
                        label="그저그래"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating3"
                        control={<Radio color="primary" />}
                        label="괜찮아"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating4"
                        control={<Radio color="primary" />}
                        label="좋아"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="Rating5"
                        control={<Radio color="primary" />}
                        label="최고야"
                        labelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default Rating;
