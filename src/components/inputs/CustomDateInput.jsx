import React from 'react'

import tw, { styled } from 'twin.macro'

export default function CustomDateInput({ onChange, value }) {
    return (
        <div>
            <CustomDateInputComponent type="date" value={value} onChange={onChange} />
        </div>
    )
}


const CustomDateInputComponent = tw.input`
    appearance-none
    py-2
    px-4
    text-gray-700
    leading-tight
    focus:outline-none
    w-48
    border-b-2
    border-gray-300
    transition
    duration-150
    ease-in-out
    focus:border-blue-500
`