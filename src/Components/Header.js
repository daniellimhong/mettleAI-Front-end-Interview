import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100vw;
    height: 23vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // text-align: center;
`

const TextBox = styled.div`
    width: 100%;
    height: 80px;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const Text = styled.p`
    font-size: 30px;
    color: #0B2B5B;
    margin: 0;
`

const Header = ({props}) => {
    return (
        <HeaderContainer>
            <TextBox>
                <Text>Patient Referral Form</Text>
                <Text>Hayes Valley Health San Francisco</Text>
            </TextBox>
        </HeaderContainer>
    )
}

export default Header;