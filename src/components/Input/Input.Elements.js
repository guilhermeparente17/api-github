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
`;
