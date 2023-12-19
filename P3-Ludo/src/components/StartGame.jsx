import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="images/dice.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div className="play_btn">
        <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin:0 auto;
  align-items: center;

  .content{
    display: flex;
    flex-direction: column;

  .play_btn{
    max-width: 1180px;
    display: flex;
    justify-content: flex-end;
  }

    h1{
        font-size: 96px;
        font-weight: 700;
    }
  }
`;


