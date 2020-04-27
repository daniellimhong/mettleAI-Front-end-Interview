import React, { useState } from 'react'
import Header from './Components/Header'
import FormDisplay from './Components/FormDisplay'
import styled from 'styled-components'
import './App.css'

const Body = styled.div`
  width: 100vw;
  height: 77vh;
  background-color: #CDE7ED;
  text-align: center;
`

const TextBox = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`

const Text = styled.p`
    font-size: 24px;
    color: #0B2B5B;
`

function App() {
  const [formCount, setFormCount] = useState(1);

  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Body>
        <TextBox>
          <Text>Referral Patients</Text>
          <Text style={{fontSize: "20px"}}>You can add up to 5 patients at a time</Text>
        </TextBox>
      </Body>
      {/* Form Display */}
        {/* Form */}
        {/* Add Another Patient [NOT COMPONENT] */}
      {/* Send Referral */}
    </div>
  );
}

export default App;
