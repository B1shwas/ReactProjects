import styled from "styled-components";
export const Button = styled.button`
  min-width: 220px;
  height: 44px;
  padding: 10px 18px;
  border: none;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineBtn = styled(Button)`
  background-color: transparent;
  color: black;
  border: 1px solid black;
  &:hover{
    background-color: black;
    color: white;
  }
  `