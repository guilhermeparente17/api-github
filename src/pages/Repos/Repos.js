import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectorsData from "../../store/Selectors";
import Input from "../../components/Input/Input";
import api from "../../utils/api-base";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/98288-loading.json";

import {
  ReposContainer,
  ReposTitle,
  ReposContent,
  ReposCards,
} from "./Repos.Elements";
import Card from "../../components/Card/Card";
import axios from "axios";
import Pagineted from "../../components/Paginated/Pagineted";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Repos = () => {
  const user = useSelector(SelectorsData.getUser);
  const [reposit, setReposit] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const testeValue = useDebounce(search, 1000);

  const handleRepos = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `${user?.repos_url}?per_page=10&page=${page}&order=DESC`
      );
      setReposit(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories`,
        {
          params: {
            q: `${search} user:${user?.login} in:name`,
          },
        }
      );
      setReposit(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (testeValue.trim()) {
      handleSearch();
    } else {
      handleRepos();
    }
  }, [testeValue, page]); //eslint-disable-line

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ReposContainer>
      <ReposContent>
        <ReposTitle>Seus Repositorios</ReposTitle>
        <Input
          type="text"
          placeholder="Pesquise por seus repositorios"
          textAlign="center"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </ReposContent>
      {loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <ReposCards>
          {reposit?.map((repo, idx) => {
            return (
              <Card
                created_at={repo?.created_at}
                key={idx}
                name={repo?.name}
                link={repo?.html_url}
              />
            );
          })}
        </ReposCards>
      )}
      <Pagineted page={page} setPage={setPage} reposit={reposit} />
    </ReposContainer>
  );
};

export default Repos;
