import React from "react";
import Button from "../Button/Button";

import { CardContainer, CardTitle, CardLink } from "./Card.Elements";

const Card = ({ link, name }) => {
  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardLink href={link} target="_blank" rel="noreferrer">
        Link do repo
      </CardLink>
      <Button title="branchs" />
    </CardContainer>
  );
};

export default Card;
