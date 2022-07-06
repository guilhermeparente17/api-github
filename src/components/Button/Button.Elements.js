import styled from "styled-components";

export const ButtonFormat = styled.button`
  width: 200px;
  height: 40px;
  background-color: #003141;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgba(1, 1, 1, 0.5);
    transition: 0.2s ease-in-out;
  }
`;
