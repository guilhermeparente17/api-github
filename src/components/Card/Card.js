import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { CardContainer, CardTitle, CardLink, CardSpan } from "./Card.Elements";

const Card = ({ link, name, created_at }) => {
  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardLink href={link} target="_blank" rel="noreferrer">
        Link do repositorio
      </CardLink>
      <CardSpan>Criado em: {dayjs(created_at).format("DD/MM/YYYY")}</CardSpan>
      <Link to={`branchs/${name}`}>
        <Button title="branches" />
      </Link>
    </CardContainer>
  );
};

export default Card;
