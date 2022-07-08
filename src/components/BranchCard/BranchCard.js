import React from "react";
import { useDispatch } from "react-redux";
import { addBranch } from "../../store/ActionsType";

import { BranchCardContainer, BranchCardName } from "./BranchCard.Elements";

const BranchCard = ({ branch }) => {
  const dispatch = useDispatch();
  dispatch(addBranch(branch));

  return (
    <BranchCardContainer to={`/repositorios/branchs/${branch?.name}/commits`}>
      <BranchCardName>{branch?.name}</BranchCardName>
    </BranchCardContainer>
  );
};

export default BranchCard;
