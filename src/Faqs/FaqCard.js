import React from "react";
import './FaqCard.css';
const FaqCard = (props) => {

  return (
    <div className="faqCard">
      <div className="faqQuestion">
        {props.faq.question}
      </div>
      <div className="faqAnswer">
        {props.faq.answer}
      </div>
    </div>
  );
}

export default FaqCard;