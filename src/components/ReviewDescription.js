import React from "react";
import styled from "styled-components";

const RevieDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  display: inline-block;
  margin-right: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  resize: none;
  border: 2px solid rgba(172, 192, 197, 0.43);
  border-radius: 4px;
  padding: 10px;
  font-family: 'Lato';
`;

const ReviewDescription = () => {
  return (
    <RevieDesc>
      <Label htmlFor="review-area">Product review</Label>
      <TextArea
        name="review"
        id="review-area"
        cols="50"
        rows="3"
        placeholder="Example: Since I bouth this a month ago, it has been used a lot. What I like best/what is worst about this product is..."
        required
        maxLength="200"
      ></TextArea>
    </RevieDesc>
  );
};

export default ReviewDescription;
