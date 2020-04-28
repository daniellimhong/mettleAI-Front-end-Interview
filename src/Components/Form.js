import React, { useState } from "react";
import styled from "styled-components";

const Form = (props) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <FormContainer>
      <FormHeader>
        <div>
          <div className="number-div">
            <p>{props.formNumber}</p>
          </div>
          <h2>New Referral</h2>
        </div>
      </FormHeader>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  background-color: white;
  width: 60%;
  height: 20em;
  border-radius: 4px;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;


  .number-div {
    width: 1.8rem;
    height: 3rem;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #25A575;
    color: white;
    border-radius: 4px 0 0 0;
    // padding-top: 10px;
  }
`;

/* 
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
*/
