import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1> Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <div
            className="quantity-minus"
            style={{ cursor: "pointer", padding: 10 }}
            title="Decrement"
            onClick={() => dispatch(decNumber(5))}
          >
            <span>-</span>
          </div>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <div
            className="quantity_plus"
            style={{ cursor: "pointer", padding: 10 }}
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
