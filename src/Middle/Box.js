import React from "react";
import Logo from "./star.jpg";
import "./Left.css"
function Box(props){
  return (
      <div className="Body" style={{backgroundColor:"white", width:"330px"}}>
        <div className="Card-name">
          <div className="Box-body">
            <h5 className="Boxes">{props.ques}</h5>
            <hr></hr>
            <p className="value">
                <span><img alt="*" id="star" src="data:image/png;base64,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"/></span> {props.ans}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Box;