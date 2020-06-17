import React, { useContext } from "react";
import ColorContext from "../context/Color.context";
import Green from "./Green";
import "./App.css";

const Blue = () => {
  const { increase, decrease } = useContext(ColorContext);
  return (
    <div className="blue">
      <button className="increment" onClick={increase}>
        inc
      </button>
      <button className="decrement" onClick={() => decrease()}>
        dec
      </button>
      <Green>green</Green>
    </div>
  );
};

export default Blue;
