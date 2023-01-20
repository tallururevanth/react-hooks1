import React from "react";
import "./style.css";
import SingleInput from "./components/SingleInpuUsingHook.js";
import DoubleInput from "./components/DoubleInputUsingHooks";

export default function App() {
  return (
    <div>
      <h1>Single Input</h1>
      <SingleInput/>
      <h1>Double Input</h1>
      <DoubleInput/>
    </div>
  );
}
