import styled from "styled-components";

export const CardContainer = styled.section`
  width: 284px;
  height: 145px;
  background-color: #d9d9d9;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const CardTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #003141;
`;

export const CardLink = styled.a`
  color: #003141;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardSpan = styled.span``;
