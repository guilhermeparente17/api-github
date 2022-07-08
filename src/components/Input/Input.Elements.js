import styled from "styled-components";

export const InputContainer = styled.input`
  width: 300px;
  height: 25px;
  padding: 10px;
  border-radius: 15px;
  outline: none;
  border: none;
  margin-bottom: ${({ marginB }) => `${marginB}px`};
  font-size: 18px;
  font-weight: 500;
  text-align: ${({ textAlign }) => `${textAlign}`};
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 550px) {
    width: 200px;
    font-size: 14px;
    transition: 0.2s ease-in-out;
  }
`;
