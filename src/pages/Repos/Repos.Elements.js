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
  margin-top: 100px;

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
