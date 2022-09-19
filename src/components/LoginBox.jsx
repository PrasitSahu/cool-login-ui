import React, { Component } from "react";
import Form from "./Loginform";

class LoginBox extends Component {
  state = {};
  render() {
    return (
      <div className="h-[56%] md:h-[60%] lg:h-[72%] w-3/4 lg:w-[60%] bg-[#393939ea] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
        <div className="absolute hidden lg:block w-[40%] h-full bg-[#2a2a2ab6] overflow-visible">
          <img
            src="/img/gm-girl.png"
            className="relative z-20 -left-[40px] w-full h-full object-contain overflow-visible"
            style={{
              transformStyle: "preserve-3d",
              transform: "scale(1.42) translateZ(200px)",
            }}
          />
        </div>
        <div className="absolute h-full w-full lg:w-[60%] lg:left-[40%] bg-transparent">
          <h3 className="font-[lucky] text-gray-100 text-3xl font-bold text-center tracking-widest mt-10">
            SIGNIN
          </h3>
          <Form />
        </div>
      </div>
    );
  }
}

export default LoginBox;
