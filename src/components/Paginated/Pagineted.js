import React from "react";

import { PaginetedContainer, PaginetedButton } from "./Pagineted.Elements";

const Pagineted = ({ page, setPage, reposit }) => {
  if (page < 1) {
    setPage(1);
  }
  return (
    <PaginetedContainer>
      {page !== 1 && (
        <PaginetedButton onClick={() => setPage(--page)}>{`<`}</PaginetedButton>
      )}
      {reposit && (
        <PaginetedButton onClick={() => setPage(++page)}>{`>`}</PaginetedButton>
      )}
    </PaginetedContainer>
  );
};

export default Pagineted;
