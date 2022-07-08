import dayjs from "dayjs";
import React from "react";

import { CommitCardContainer, CommitCardName, CommitCardA } from "./CommitCard.Elements";

const CommitCard = ({ commit, params }) => {
  return (
    <CommitCardContainer>
      <CommitCardName>Autor: {commit?.commit?.author?.name}</CommitCardName>
      <CommitCardName>Mensagem: {commit?.commit?.message}</CommitCardName>
      <CommitCardName>Criado em:{dayjs(commit?.commit?.committer?.date).format('DD/MM/YYYY')}</CommitCardName>
      <CommitCardName><CommitCardA href={commit?.html_url} target="_blank">Link do commit</CommitCardA></CommitCardName>

    </CommitCardContainer>
  );
};

export default CommitCard;
