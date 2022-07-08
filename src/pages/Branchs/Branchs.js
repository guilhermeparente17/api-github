import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addBranchName } from "../../store/ActionsType";
import animationData from "../../assets/lotties/98288-loading.json";
import Lottie from "react-lottie";

const Branchs = () => {
  const user = useSelector(SelectorsData.getUser); //eslint-disable-line
  const branchName = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  dispatch(addBranchName(branchName));
  const [branchs, setBranchs] = useState();

  const handleBranchs = async () => {
    setLoading(true)
    try {
      
      const response = await api.get(
        `/repos/${user?.login}/${branchName.nome}/branches`
      );
      setBranchs(response.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    handleBranchs();
  }, []); //eslint-disable-line

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <BranchsContainer>
      <BranchSection>
        <BranchHeader>
          <Link to="/repositorios">
            <BranchButton>{`<- Voltar`}</BranchButton>
          </Link>
          <BranchsTitle>Branches</BranchsTitle>
        </BranchHeader>

        {loading ? <Lottie options={defaultOptions} height={400} width={400} /> : <BranchsContent>
          {branchs?.map((branch, idx) => {
            return <BranchCard key={idx} branch={branch} />;
          })}
        </BranchsContent>}
      </BranchSection>
    </BranchsContainer>
  );
};

export default Branchs;
