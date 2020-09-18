import React, { FormEvent, useState, useEffect } from "react";
import { ErrorBlock, Form, Repositories, Title } from "./style";
import { FiChevronRight } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRespository = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storageRespository) return JSON.parse(storageRespository);

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  const handleAddRepository = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setInputError("");

    if (!newRepo) {
      setInputError("Enter a repo name: owner/repo");
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo("");
    } catch {
      setInputError("Error fetching repository data");
    }
  };

  return (
    <>
      <img src={logoImg} alt="github_explorer" />
      <Title>Explore Github Repos</Title>
      <Form hasErrors={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Repo name"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <ErrorBlock>{inputError}</ErrorBlock>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              {repository.description && <p>{repository.description}</p>}
            </div>
            <FiChevronRight size="20" />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
