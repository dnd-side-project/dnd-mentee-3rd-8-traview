import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

function TitleName() {
    return (
        <form style={{ width: '100%', height: '100%' }}>
            <Input
                placeholder="제목"
                inputProps={{ 'aria-label': 'description' }}
                style={{ width: '100%', height: '11%' }}
            />
            <TextField
                style={{
                    width: '100%',
                    marginTop: '21px',
                    borderRadius: '10px',
                    boxSizing: 'border-box',
                    border: '2px solid #979797',
                }}
                id="outlined-multiline-static"
                multiline
                rows={17}
                placeholder="리뷰 적기..."
                variant="outlined"
            />
        </form>
    );
}

export default TitleName;
