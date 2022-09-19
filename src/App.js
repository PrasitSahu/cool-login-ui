import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginBox from "./components/LoginBox";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video
        src="/videos/bg.mp4"
        autoPlay
        loop
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
          transform: "scale(1.4)",
        }}
        className="overflow-hidden"
      ></video>
      <LoginBox />;
    </div>
  );
}

export default App;
