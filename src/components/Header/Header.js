import React from "react";
import { useSelector } from "react-redux";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderUser,
  HeaderContent,
} from "./Header.Elements";
import SelectorsData from "../../store/Selectors";

const Header = () => {
  const user = useSelector(SelectorsData.getUser);
  console.log(user);
  return (
    <HeaderContainer>
      <HeaderTitle>API-GITHUB</HeaderTitle>
      <HeaderContent>
        <HeaderUser href={user?.html_url} target="_blank">
          {user?.login}
        </HeaderUser>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
