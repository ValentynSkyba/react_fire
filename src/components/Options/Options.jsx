import React from "react";

const Options = ({ data, handleVote }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>

      <div>
        {data.map((btn) => (
          <button onClick={() => handleVote(btn)} key={btn}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
