import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: 'green',
                '& .MuiSlider-thumb': {
                    color: 'white',
                    background: "radial-gradient(#00CC22 27%, white 30%)",
                    border: '1.5px solid #00CC22',
                },
                '& .MuiSlider-rail': {
                    color: 'grey',
                },
                '& .MuiSlider-track': {
                    color: '#00CC22',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
