import React from "react";
import styled from "styled-components";

const TitleArea = styled.div`

  display: flex;
  flex-direction: column;

`;

const Label = styled.label`

 display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin-bottom: 5px;

`;

const TitleInput = styled.input`

width: 440px;
height: 35px;
border: 2px solid rgba(172, 192, 197, 0.43);
border-radius: 4px;
padding: 10px;
margin: 0 20px 20px 0;

`;

const Title =  () => {

  return (

    <TitleArea>
    <Label htmlFor="review-title">Review title</Label>
    <TitleInput
      type="text"
      placeholder="Example: Easy to use"
      id="review-title"
      required
    />
  </TitleArea>

  );

}

export default Title;