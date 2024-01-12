import { Fragment, useState } from "react";
import "./App.css";
import esc from './assets/esc.png'
import Rating from "./components/Rating";
import Title from "./components/Title";
import ReviewDescription from "./components/ReviewDescription";
import ReviewerInfo from "./components/ReviewerInfo";
import CheckBox from "./components/CheckBox";
import Option from "./components/Option";


const App = () => {

//모달창 토글
const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
        <div id="back"></div>
        {!isVisible && <button type="button" className={'write-review'} onClick={()=>setIsVisible(!isVisible)}>Go to Write a review</button>}
        {isVisible && <section className={'review-card'} >
          <h1 id="card-title">Overall rating</h1>
          <form action="#" method="post">

            <Rating />
            <Title />
            <Option />
            <ReviewDescription />
            <ReviewerInfo />
            <CheckBox />
           
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
