import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderContainer, HeaderTitle, HeaderLogout } from "./Header.Elements";
import SelectorsData from "../../store/Selectors";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { addLogado, addUser } from "../../store/ActionsType";

const Header = () => {
  const user = useSelector(SelectorsData.getUser);
  const logado = useSelector(SelectorsData.getLogado);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    dispatch(addLogado(false));
    dispatch(addUser({}));
    navigate("/", { replace: true });
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderTitle>API-GITHUB</HeaderTitle>
      </Link>
      <HeaderLogout onClick={() => handleLogout()}>
        {logado && (
          <BiLogOut style={{ marginRight: "20px" }} size="40" color="white" />
        )}
      </HeaderLogout>
    </HeaderContainer>
  );
};

export default Header;
