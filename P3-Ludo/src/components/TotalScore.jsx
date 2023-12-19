import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  height: 151px;
  display: flex;
  flex-direction: column;
  justify-content: end;
   h1{
    font-size: 100px;
    line-height: 100px;
    font-weight: 500;

   }
   p{
    font-size: 24px;
    font-weight: 500;
   }
    
`