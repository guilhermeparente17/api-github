import styled from "styled-components";

export const CommitCardContainer = styled.div`
  width: 90%;
  height: 50px;
  background-color: #003141;
  border-radius: 30px;
  margin: 15px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  flex-wrap: wrap;

  @media screen and (max-width: 920px){
    height: 120px ;
  }

  @media screen and (max-width: 539px){
    height: 200px ;
  }

  @media screen and (max-width: 383px){
    height: 250px ;
  }
`;

export const CommitCardName = styled.span`
  padding: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

export const CommitCardA = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover{
    text-decoration: underline
  }
`;
