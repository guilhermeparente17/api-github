import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SelectorsData from "../../store/Selectors";
import api from "../../utils/api-base";
import animationData from "../../assets/lotties/98288-loading.json";

import {
  CommitsContainer,
  CommitsSection,
  CommitsHeader,
  CommitsButton,
  CommitsTitle,
  CommitsContent,
} from "./Commits.Elements";

// import api from "../../utils/api-base";
import CommitCard from "../../components/CommitCard/CommitCard";
import Lottie from "react-lottie";

const Commits = () => {
  const params = useParams();

  const branchName = useSelector(SelectorsData.getBranchName);

  const [commit, setCommit] = useState();
  const [loading, setLoading] = useState(false);

  const branch = useSelector(SelectorsData.getBranch);

  const handleCommits = async () => {
    setLoading(true)
    try {
      const response = await api.get(branch?.commit?.url);
      setCommit(response.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    handleCommits();
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
    <CommitsContainer>
      <CommitsSection>
        <CommitsHeader>
          <Link to={`/repositorios/branchs/${branchName.nome}`}>
            <CommitsButton>{`<- Voltar`}</CommitsButton>
          </Link>
          <CommitsTitle>Commits</CommitsTitle>
        </CommitsHeader>

        <CommitsContent>
          
        {loading ? <Lottie options={defaultOptions} height={400} width={400} /> : <CommitCard commit={commit} params={params} />}
         
        </CommitsContent>
      </CommitsSection>
    </CommitsContainer>
  );
};

export default Commits;
