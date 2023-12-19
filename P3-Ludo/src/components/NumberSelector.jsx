import styled from "styled-components";

const NumberSelector = ({ setError, selectedNumber, setSelectedNumber, error }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('')
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => {
          return (
            <Box
              key={i}
              onClick={() => numberSelectorHandler(value)}
              $isSelected={value === selectedNumber}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
  .error {
    color: #ff0c0c;
    font-weight: 400;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  border: 1px solid black;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
`;
