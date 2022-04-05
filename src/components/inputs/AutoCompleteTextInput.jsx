import React from 'react';
import tw, { styled } from "twin.macro";

const AutoCompleteTextInput = ({ data, placeHolder, onChange }) => {
    return (
        <div>
            <StyledTextInput type="text" list="data" onChange={onChange} placeholder={placeHolder} />
            <datalist id="data">
                {data?.map(item => (
                    <option value={item} key={item.split(',')[1]} />
                ))}
            </datalist>
        </div>
    );
}

export default AutoCompleteTextInput;



const StyledTextInput = tw.input`
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