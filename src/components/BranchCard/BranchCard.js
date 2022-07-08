import React from "react";

import { BranchCardContainer, BranchCardName } from "./BranchCard.Elements";

const BranchCard = ({ branch }) => {
  return (
    <BranchCardContainer>
      <BranchCardName>{branch?.name}</BranchCardName>
    </BranchCardContainer>
  );
};

export default BranchCard;
