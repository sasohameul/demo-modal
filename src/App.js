import "./App.css";
import empty_star from './assets/empty-star.png';
import full_star from './assets/full-star.png';
import esc from './assets/esc.png'

import { Fragment, useState } from "react";

const App = () => {

const [starImg, setStarImg] = useState([false,false,false,false,false]);
const [isVisible, setIsVisible] = useState(false);


const rateClickHandler = (idx) => {

  let starArray = [...starImg];

  for(let i = 0; i < 5; i++){

    starArray[i] = (i <= idx && !starArray[idx]) ? true : false;
  }

  setStarImg(starArray);

}

  return (
    <Fragment>

        <div id="back"></div>
        {!isVisible && <button type="button" className={'write-review'} onClick={()=>setIsVisible(!isVisible)}>Go to Write a review</button>}
        {isVisible && <section className={'review-card'} >
          <h1 id="card-title">Overall rating</h1>
          <form action="#" method="post">
            <div className="rating">
              {starImg.map((star,idx)=>{

                return(
                <Fragment key={idx}>
                <img
                  src={star ? full_star : empty_star }
                  alt="full_star"
                  className="star-image"
                  id={idx}
                  onClick={(e)=> rateClickHandler(e.target.id)}
                />
                
               
                </Fragment>)
              })}
            </div>
            <button type="button" id="rate-instruc" >
              Click to rate
            </button>
            <div className="title">
              <label htmlFor="review-title">Review title</label>
              <input
                type="text"
                placeholder="Example: Easy to use"
                className="review-contents review-text"
                id="revie-title"
                required
              />
            </div>
            <div className="option-recommend">
              <p>Would you recommend this product to a friend?</p>
              <input type="radio" id="recommend" name="option" value="Y" required/>
              <label htmlFor="recommend" id="yes">
                <strong>Yes</strong>
              </label>
              <input type="radio" id="not-recommend" name="option" value="N" />
              <label htmlFor="not-recommend" id="no">
                <strong>No</strong>
              </label>
            </div>
            <div className="review-desc">
              <label htmlFor="review-area">Product review</label>
              <textarea
                name="review"
                id="review-area"
                cols="50"
                rows="3"
                placeholder="Example: Since I bouth this a month ago, it has been used a lot. What I like best/what is worst about this product is..."
                required
                maxLength="200"
              ></textarea>
            </div>
            <div className="reviewer-info">
              <div className="info-box">
                <label htmlFor="name">Nickname</label>
                <input
                  type="text"
                  placeholder="Example: bob27"
                  className="review-contents"
                  id="name"
                  required
                />
              </div>
              <div className="info-box">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  placeholder="Example: your@email.com"
                  className="review-contents"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="checkbox-button">
              <span id="show-checkbox"></span>
              <input type="checkbox" id="accept" name="required" required/>
              <label htmlFor="accept">
                I accept the
                <span className="underline"> terms and conditions</span>
              </label>
            </div>
            <p id="terms-desc">
              You will be able to receive emails in connection with this review
              (eg if others comment on your review). All emails contain the
              option to unsubscribe. We can use the text and star rating from
              your review in other marketing.
            </p>
            <button type="submit" className="submit-button">
              Submit product review
            </button>
          </form>
          <button type="button" className="exit" onClick={()=> {setIsVisible(!isVisible)}}>
            <img src={esc} alt="exit" />
          </button>
        </section>}
    </Fragment> 
  
  );
};

export default App;
