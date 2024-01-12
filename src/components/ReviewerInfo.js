import React from "react";
import styled from "styled-components";

const ReviewInfo = styled.div`

display: flex;
justify-content: space-between;
align-items: center;


`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  display: inline-block;
  margin-right: 5px;
`;

const ReviewContents = styled.input`

width: 185px;
height: 35px;
border: 2px solid rgba(172, 192, 197, 0.43);
border-radius: 4px;
padding: 10px;
margin: 0 20px 20px 0;


`;


const ReviewerInfo = () => {
  return (
    <ReviewInfo>
      <div className="info-box">
        <Label htmlFor="name">Nickname</Label>
        <ReviewContents
          type="text"
          placeholder="Example: bob27"
          className="review-contents"
          id="name"
          required
        />
      </div>
      <div className="info-box">
        <Label htmlFor="email">Email address</Label>
        <ReviewContents
          type="email"
          placeholder="Example: your@email.com"
          className="review-contents"
          id="email"
          required
        />
      </div>
    </ReviewInfo>
  );
};

export default ReviewerInfo;
