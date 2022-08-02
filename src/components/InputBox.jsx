import React, { Component } from "react";

class InputBox extends Component {
  state = {};

  render() {
    return (
      <div className="m-2">
        <label
          htmlFor={this.props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-[lucky] tracking-widest"
        >
          {this.props.placeholder}
        </label>
        <input
          type={this.props.type}
          id={this.props.id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={this.props.placeholder}
          required
        />
      </div>
    );
  }
}

export default InputBox;
