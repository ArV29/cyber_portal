import React from "react";
import "./QuestionPreview.css";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
const QuestionPreview = (props) => {
  const renderQuestionCards = props.questionDetails.map((details, index) => {
    const questionRoute = `/questionThread/${details.id}`;
    return (

      <div key={index}>
        <Link Link to={questionRoute} style={{ textDecoration: 'none' }}>
          <div className="questionPreview">
            <div className="question">{details.question}</div>
            <div className="answerPreview">{details.answer}</div>
            <div className="divider"></div>
            <div className="statistics">
              <div className="vote">
                <ImArrowUp className="upvote" />{" "}
                <ImArrowDown className="downvote" />
                <div className="votes">{details.votes}</div>
              </div>
              <div className="comments">
                <BiCommentDetail className="commentIcon" />
                {details.numberOfComments}
              </div>
            </div>
          </div>
        </Link >

      </div>
    );
  });

  return <div className="topQuestions">{renderQuestionCards}</div>;
};

export default QuestionPreview;
