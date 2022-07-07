import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #003141;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
`;

export const HeaderContent = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderUser = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderLogout = styled.div``;
