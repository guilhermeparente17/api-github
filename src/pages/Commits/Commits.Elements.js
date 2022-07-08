import styled from "styled-components";

export const CommitsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;
`;

export const CommitsSection = styled.section`
  width: 95%;
  height: 90%;
  background-color: #d9d9d9;
  border-radius: 25px;
  text-align: center;
`;

export const CommitsTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px;
  color: #003141;
  font-weight: 900;
`;

export const CommitsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommitsHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommitsButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #003141;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #1b4a59;
    transition: 0.2s ease-in-out;
  }
`;
