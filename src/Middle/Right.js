import React from "react";
import Box from "./Box";
import "./Left.css";

const Right = () => {
  return (
    <div
      className="right"
      style={{
        flex: 1,
        width: "50vw",
        height: "60vh",
        backgroundColor: "#0854fc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "white solid",
      }}
    >
      <div>
        <div align="center">
          <div
            className="heading"
            style={{
              width: 350,
              height: 70,
              borderRadius: 100,
              transform: [{ scaleX: 2 }],
              backgroundColor: "#c8c4c4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>NEWS AND ALERT</h1>
          </div>
        </div>
        <div
          className="boxes"
          style={{
            // padding: "20px",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★
            </div>
            <div
              className="Body"
              style={{
                backgroundColor: "white",
                width: "330px",
                height: "20px",
              }}
            >
              { }
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★
            </div>
            <div
              className="Body"
              style={{
                backgroundColor: "white",
                width: "330px",
                height: "20px",
              }}
            >
              { }
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★
            </div>
            <div
              className="Body"
              style={{
                backgroundColor: "white",
                width: "330px",
                height: "20px",
              }}
            >
              { }
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★
            </div>
            <div
              className="Body"
              style={{
                backgroundColor: "white",
                width: "330px",
                height: "20px",
              }}
            >
              { }
            </div>
          </div>
          {/* <div
            style={{
              padding: "20",
              margin: "10",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            ★
            <div
              style={{
                paddingleft: "10px",
                backgroundColor: "white",
                width: "800",
              }}
            >
              {"sda "}
            </div>
          </div>

          <div style={{ padding: "20", display: "flex", flexWrap: "wrap" }}>
            ★
            <div
              style={{
                paddingleft: "10px",
                backgroundColor: "white",
                width: "800",
              }}
            >
              {"sda "}
            </div>
          </div> */}
          {/* <Box ques="Lorem ipsome" ans=" jagkwgfwgfuwegjgjewgfgfjwe" />
          <Box ques="Lorem ipsome" ans=" jagkwgfwgfuwegjgjewgfgfjwe" />
          <Box ques="Lorem ipsome" ans=" jagkwgfwgfuwegjgjewgfgfjwe" /> */}
          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "150px",
                border: "1px solid black",
              }}
            >
              <div
                style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "grey",
                    width: "50px",
                    height: "40px",
                  }}
                ></div>
              </div>
            </div>
            {/* <Box ques="Lorem ipsome" ans=" jagkwgfwgfuwegjgjewgfgfjwe" /> */}
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "150px",
                border: "1px solid black",
              }}
            >
              <div
                style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "grey",
                    width: "50px",
                    height: "40px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
