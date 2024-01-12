import React from "react";
import styled from "styled-components";

const OptionRecommend = styled.div`

  margin-bottom: 20px;
}
`;

const OptionDesc = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

const Strong = styled.strong`
  margin: 0 6px;
`;

const YesInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;
const YesLabel = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;

  &::before {
    content: "";
    display: inline-block;
    background: url(./assets/empty-radio-button.png) no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  ${YesInput}:checked + &::before {
    background: url(./assets/radio-button.png) no-repeat;
    background-size: cover;
  }
`;

const NoInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const NoLabel = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;

  &::before {
    content: "";
    display: inline-block;
    background: url(./assets/empty-radio-button.png) no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  ${NoInput}:checked + &::before {
    background: url(./assets/radio-button.png) no-repeat;
    background-size: cover;
  }

`;

const Option = () => {
  return (
    <OptionRecommend>
      <OptionDesc>Would you recommend this product to a friend?</OptionDesc>
      <YesInput type="radio" id="recommend" name="option" value="Y" required />
      <YesLabel htmlFor="recommend">
        <Strong>Yes</Strong>
      </YesLabel>
      <NoInput type="radio" id="not-recommend" name="option" value="N" />
      <NoLabel htmlFor="not-recommend">
        <Strong>No</Strong>
      </NoLabel>
    </OptionRecommend>
  );
};

export default Option;
