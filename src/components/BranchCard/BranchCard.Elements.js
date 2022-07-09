import { Link } from "react-router-dom";
import styled from "styled-components";

export const BranchCardContainer = styled(Link)`
  width: 30%;
  height: 60px;
  background-color: #003141;
  border-radius: 30px;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  min-width: 300px;
`;

export const BranchCardName = styled.span`
  padding: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;
