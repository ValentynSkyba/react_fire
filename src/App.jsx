import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const data = ["Good", "Neutral", "Bad"];
  const defaultNumbers = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
    Positive: 0,
  };

  const [state, setState] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("save-data"));
    return saveData || defaultNumbers;
  });

  useEffect(() => {
    window.localStorage.setItem("save-data", JSON.stringify(state));
  }, [state]);
  const handleVote = (value) => {
    setState((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
      Total: prev.Total + 1,
    }));
  };

  const totalPositive = Math.round((state.Good / state.Total) * 100);

  return (
    <>
      <Description />
      <Options data={data} handleVote={handleVote} />
      <Feedback state={state} setState={setState} positive={totalPositive} />
    </>
  );
}

export default App;
