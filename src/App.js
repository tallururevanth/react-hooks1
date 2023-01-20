import React from "react";
import "./style.css";
import SingleInput from "./components/SingleInpuUsingHook.js";
import DoubleInput from "./components/DoubleInputUsingHooks";

export default function App() {
  return (
    <div>
      {/* <SingleInput/> */}
      <DoubleInput/>
    </div>
  );
}
