import React, { useState } from "react";

import {
  LoginContainer,
  LoginBg,
  VideoBg,
  LoginContent,
  LoginSimpleForm,
  LoginForm,
  LoginFormTitle,
  LoginFormSubTitle,
} from "./Login.Elements";
import Video from "../../assets/videos/back.mp4";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import api from "../../utils/api-base";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLogado, addUser } from "../../store/ActionsType";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.get(`users/${username}`);
      dispatch(addUser(response.data));
      dispatch(addLogado(true));
      navigate("/repositorios", { replace: true });
      toast.success("Seja Bem-vindo");
    } catch (error) {
      toast.error("ocorreu um erro, tente novamente.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <LoginBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LoginBg>
      <LoginContent>
        <LoginSimpleForm>
          <LoginForm onSubmit={handleSubmit}>
            <LoginFormTitle>LOGIN</LoginFormTitle>
            <LoginFormSubTitle>
              ENTRE COM SEU USERNAME DO GITHUB
            </LoginFormSubTitle>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              marginB={30}
            />

            <Button type="submit" title="entrar"></Button>
          </LoginForm>
        </LoginSimpleForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
