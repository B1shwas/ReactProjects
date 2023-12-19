import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineBtn } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber){
      setError("You have not selected any number")
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if( selectedNumber === randomNumber ){
      setScore((prev) => prev + randomNumber)
    }
    else{
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
  };



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore
         score={score}/>
        <NumberSelector
         error = {error}
         setError = {setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns" style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        marginTop: "20px"
      }}>
      <OutlineBtn onClick={()=> setScore(0)}>Reset Score</OutlineBtn>
      <Button onClick={()=> setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    max-width: 1280px;
    height: 151px;
    margin: 80px 64px;
    display: flex;
    justify-content: space-between;
  }
`;
