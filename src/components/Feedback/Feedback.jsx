import React, { useState } from "react";

const Feddback = ({ state, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {state.Good}</p>
      <p>Neutral: {state.Neutral}</p>
      <p>Bad: {state.Bad}</p>
      <p>Total: {state.Total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feddback;
