import React from 'react';
import tw, { styled } from "twin.macro";





const CustomTextInput = ({ placeHolder, onChange, value }) => {
    return (
        <div>
            <TextInputBox type="text" value={value} placeholder={placeHolder} onChange={onChange} />
        </div>
    );
}

export default CustomTextInput;


const TextInputBox = tw.input`
    border-solid
    border-2
    border-gray-300
    rounded
    p-2
    w-full
    h-10
    text-gray-900
    font-medium
    `
