import React, { Component } from "react";
import InputBox from "./InputBox";

class Form extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col w-full p-4 md:p-6 lg:p-10">
        <InputBox name="id" type="text" id="id" placeholder="Username" />
        <InputBox
          name="password"
          type="password"
          id="password"
          placeholder="Password"
        />
        <div className="flex gap-2 pl-3">
          <input type="checkbox" id="remember" />{" "}
          <label
            htmlFor="remember"
            className="text-white font-[lucky] tracking-widest font-extralight text-sm cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 w-28 h-10 mt-6 ml-2 rounded-md font-[lucky] tracking-widest text-lg font-bold">
          signin
        </button>
      </div>
    );
  }
}

export default Form;
