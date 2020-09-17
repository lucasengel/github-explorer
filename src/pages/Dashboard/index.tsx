import React, { FormEvent, useState, ErrorInfo } from "react";
import { ErrorBlock, Form, Repositories, Title } from "./style";
import { FiChevronRight } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import Repository from "../Repository";

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
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
      <img src={logoImg} alt="Github Explorer" />
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
          <a key={repository.full_name} href="test">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              {repository.description && <p>{repository.description}</p>}
            </div>
            <FiChevronRight size="20" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
