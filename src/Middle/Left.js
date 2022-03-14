import React from "react";
import Box from "./Box";
import "./Left.css";
import Logo from "./cp1.png";
const Left = () => {
  return (
    <div className="left">
      <div >
        <div style={{ display: "flex" }}>
          <div className="heading" style={{ border: "2px solid black", width: "200px", marginLeft: "270px", backgroundColor: "#c8c4c4", height: "80px", marginBottom: "40px" }}>
            <h1 >What to do?</h1>
          </div>
          <div className="Cp-logo" style={{ marginLeft: "90px" }}>
            <img style={{ width: "110px", height: "150px" }} src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="boxes" style={{ display: "flex", flexWrap: "wrap", paddingLeft: "120px" }}>
          <Box
            ques="Lorem ipsome"
            ans=" jagkwgfwgfuwegjgjewgfgfjwe"
          />
          <Box
            ques="Lorem ipsome"
            ans=" jagkwgfwgfuwegjgjewgfgfjwe"
          />
          <Box
            ques="Lorem ipsome"
            ans=" jagkwgfwgfuwegjgjewgfgfjwe"
          />
          <Box
            ques="Lorem ipsome"
            ans=" jagkwgfwgfuwegjgjewgfgfjwe"
          />
        </div>
      </div>
    </div>
  );
};

export default Left;