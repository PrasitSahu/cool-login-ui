import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginBox from "./components/LoginBox";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1E1E1E] overflow-hidden">
      <LoginBox />;
    </div>
  );
}

export default App;
