import React, { useState } from 'react'
import styled from 'styled-components';
import Form from './Form';

const DisplayContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SendButton = styled.button`
    background-color: #0B2B5B;
    font-size: 0.8em;
    color: white;
    width: 60%;
    height: 2.5em;
    border-radius: 35px;
    border: none;
    margin-top: 30px;
`

const FormDisplay = ({props}) => {
    const [ forms, setForm ] = useState([]); // array of objects

    return (
        <DisplayContainer>
            <Form formNumber={1}/>
            <SendButton>SEND REFERRALS</SendButton>
        </DisplayContainer>
    )
}

export default FormDisplay;

/*!
    form data
    {
        firstName,
        lastName,
        dateOfBirth,
        contactLanguage,
        phoneNum,
        email,
        address,
        noteReason
    }

    add patient button (max of 5)
*/