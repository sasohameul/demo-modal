import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import full_star from "../assets/full-star.png";
import empty_star from "../assets/empty-star.png";
import styled from "styled-components";

const Rate = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
`;

const StarImage = styled.img`
  width: 44px;
  height: 44px;
  border: 2px solid rgba(172, 192, 197, 0.43);
  border-radius: 4px;
  display: block;
  padding: 4px;
  margin-right: 8px;
  cursor: pointer;

`;

const RateInstruc = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

const Rating = () => {
  //별점 기능 useState
  const [starImg, setStarImg] = useState([false, false, false, false, false]);
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [hoverIdx,setHoverIdx] = useState(0);

  //review comment
  const [comment, SetComment] = useState("Click to rate");

  //별점 클릭 기능
  const rateClickHandler = (idx) => {
    const isSelected = selectedIdx === idx;

    console.log(`선택된 인덱스 : ${selectedIdx} 그리고 들어온 인덱스: ${idx}`);
    console.log(`선택됐어 ? ${!isSelected}`);

    const newStarArray = Array.from({ length: starImg.length }, (_, i) =>
    i <= idx || (i === 0 && !isSelected) ? true : false
  );

    setStarImg(newStarArray);
    setSelectedIdx(isSelected ? null : idx);

  };

  //스타 이미지랑 
  useEffect(() => {
    let cnt = 0;
    starImg.forEach((bool) => {
      if (bool) cnt++;
    });

    console.log(cnt);
    const {id: key, comment: result} = REVIEW_COMMENT.find((comment) => comment.id === cnt );
     
    SetComment(selectedIdx !== null ? result : "Click to rate");

    console.log(result);
    
  }, [starImg,selectedIdx]);


  //마우스 올렸을 때
  const changeStarHandler = (idx) => {

    //이미 선택되어있는 별들은 바뀌지 않도록
    if(selectedIdx < idx){

      setHoverIdx(idx);
    }

  }

  //마우스 뗐을때,
  const changeStarEmptyHandler = () => {

    setHoverIdx(null);
  }

  return (
    <>
      <Rate >
        {starImg &&
          starImg.map((_, idx) => {
            return (
              <Fragment key={idx}>
                <StarImage
                  src={
                    (idx === 0 || idx <= (hoverIdx !== null ? hoverIdx : selectedIdx))
                      ? full_star
                      : empty_star
                  }
                  alt="full_star"
                  id={idx}
                  onClick={() => rateClickHandler(idx)}
                  onMouseOver={()=>changeStarHandler(idx)}
                  onMouseOut={changeStarEmptyHandler}
                />
              </Fragment>
            );
          })}
      </Rate>
      <RateInstruc>{comment}</RateInstruc>
    </>
  );
};

const REVIEW_COMMENT = [

  {id: 0, comment: "Click to rate"},
  {id: 1, comment: "Not great, needs improvement."},
  {id: 2, comment: "Average, moderately satisfying."},
  {id: 3, comment: "Good, a satisfying experience."},
  {id: 4, comment: "Excellent, highly recommended!"},
  {id: 5, comment: "Outstanding, an exceptional and unparalleled experience."}

];

export default Rating;
