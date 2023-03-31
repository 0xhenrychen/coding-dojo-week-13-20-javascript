import React from 'react';
import {useParams} from 'react-router-dom';

const NumberOrWord = (props) => {
    const {numberOrWord, colorText, colorBG} = useParams();

    return (
        <div>
            {
                isNaN(numberOrWord)?
                    colorText && colorBG ?
                        <h1 style={
                            colorText?
                                {color: colorText, backgroundColor: colorBG}
                                :null
                        }>
                        The word is {numberOrWord}, text color is {colorText}, and BG color is {colorBG}.</h1>
                        :
                        <h1>The word is {numberOrWord} with no text and/or background color.</h1>
                :
                <h1>The number is {numberOrWord}.</h1>
            }
        </div>
    );
}

export default NumberOrWord;
