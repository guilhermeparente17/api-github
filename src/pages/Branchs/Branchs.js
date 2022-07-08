import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectorsData from "../../store/Selectors";
import api from "../../utils/api-base";
import { Link, useParams } from "react-router-dom";

import {
  BranchsContainer,
  BranchSection,
  BranchsTitle,
  BranchsContent,
  BranchHeader,
  BranchButton,
} from "./Branchs.elements";
import BranchCard from "../../components/BranchCard/BranchCard";

const Branchs = () => {
  const user = useSelector(SelectorsData.getUser); //eslint-disable-line
  const branchName = useParams();
  const [branchs, setBranchs] = useState();

  const handleBranchs = async () => {
    //eslint-disable-line
    try {
      const response = await api.get(
        `/repos/${user?.login}/${branchName.nome}/branches`
      );
      setBranchs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleBranchs();
  }, []); //eslint-disable-line

  console.log(branchs);

  return (
    <BranchsContainer>
      <BranchSection>
        <BranchHeader>
          <Link to="/repositorios">
            <BranchButton>{`<- Voltar`}</BranchButton>
          </Link>
          <BranchsTitle>Branches</BranchsTitle>
        </BranchHeader>

        <BranchsContent>
          {branchs?.map((branch, idx) => {
            return <BranchCard key={idx} branch={branch} />;
          })}
        </BranchsContent>
      </BranchSection>
    </BranchsContainer>
  );
};

export default Branchs;
