import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectorsData from "../../store/Selectors";
import Input from "../../components/Input/Input";
import api from "../../utils/api-base";

import {
  ReposContainer,
  ReposTitle,
  ReposContent,
  ReposCards,
} from "./Repos.Elements";
import Card from "../../components/Card/Card";

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
  const testeValue = useDebounce(search, 1000);
  console.log(user);

  const handleRepos = async () => {
    try {
      const response = await api.get(user?.repos_url);
      setReposit(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ?q=${search} user%3A${user?.login} in%3Aname

  const handleSearch = async () => {
    try {
      const response = await api.get(`https://api.github.com/search/repositories?`, {
        params: {
          q: `${search} user:${user?.login} in:name`,
          
        }

      });
      setReposit(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(testeValue.trim()){
      handleSearch()
    } else {
      handleRepos();
    }
  }, [testeValue]); //eslint-disable-line

  useEffect(() => {
    handleRepos();
  }, []); //eslint-disable-line

  useEffect(() => {}, [search]);

  console.log(reposit);

  return (
    <ReposContainer>
      <ReposContent>
        <ReposTitle>Seus Repositorios</ReposTitle>
        <Input
          type="text"
          placeholder="Pesquise por seus repositorios"
          textAlign="center"
          value={search}
          onChange={(e) => setSearch(e.target.value)
          }
        />
      </ReposContent>
      <ReposCards>
        {reposit?.map((repo, idx) => {
          return <Card key={idx} name={repo?.name} link={repo?.html_url} />;
        })}
      </ReposCards>
    </ReposContainer>
  );
};

export default Repos;
