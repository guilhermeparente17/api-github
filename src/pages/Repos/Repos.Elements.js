import styled from "styled-components";

export const ReposContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #799fb5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReposTitle = styled.h1`
  margin: 20px 0px;
  color: #003141;
`;

export const ReposContent = styled.section`
  text-align: center;
`;

export const ReposCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media screen and (max-width: 1460px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
