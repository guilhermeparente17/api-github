import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderContainer, HeaderTitle, HeaderLogout } from "./Header.Elements";
import SelectorsData from "../../store/Selectors";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { addLogado, addUser } from "../../store/ActionsType";

const Header = () => {
  const logado = useSelector(SelectorsData.getLogado);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(addLogado(false));
    dispatch(addUser({}));
    navigate("/", { replace: true });
  };

  return (
    <HeaderContainer>
      <HeaderTitle>API-GITHUB</HeaderTitle>
      <HeaderLogout onClick={() => handleLogout()}>
        {logado && (
          <BiLogOut style={{ marginRight: "20px" }} size="40" color="white" />
        )}
      </HeaderLogout>
    </HeaderContainer>
  );
};

export default Header;
