import React from "react";
import styled from "styled-components";

const CheckBoxButton = styled.div`
  margin-bottom: 18px;
  position: relative;
  display: flex;
`;


const Label = styled.label`
font-size: 14px;
font-weight: 700;
margin-bottom: 5px;
display: inline-block;
margin-right: 5px;
cursor: pointer;
position: relative;
right: -25px;

&::before {

  content: '';
  display: block;
  position: absolute;
  left: -24px;
  top: -2px;
  width: 20px;
  height: 20px;
  background: url(/assets/empty-radio-button.png) no-repeat;
  background-size: cover;
}

`;
const Accept = styled.input.attrs({type:"checkbox"})`
  margin-right: 10px;
  display: none;

  &:checked + ${Label}::before {

    background: url(/assets/radio-button.png) no-repeat;
    background-size: cover;


  }
  
`;

const UnderLine = styled.span`

text-decoration: underline;

`;


const CheckBox = () => {
  return (
    <CheckBoxButton>
      <span id="show-checkbox"></span>
      <Accept type="checkbox" id="accept" name="required" required />
      <Label htmlFor="accept">
        I accept the
        <UnderLine className="underline"> terms and conditions</UnderLine>
      </Label>
    </CheckBoxButton>
  );
};

export default CheckBox;
