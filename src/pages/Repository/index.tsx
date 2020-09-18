import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Header, Issues, RepositoryInfo } from "./style";
import { FiChevronRight, FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

const Repository = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(({ data }) => {
      setRepository(data);
    });
    api.get(`/repos/${params.repository}/issues`).then(({ data }) => {
      setIssues(data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="github_explorer" />
        <Link to="/">
          <FiArrowLeft size="16" /> back
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              {repository.description && <p>{repository.description}</p>}
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {issues && (
        <Issues>
          {issues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size="20" />
            </a>
          ))}
        </Issues>
      )}
    </>
  );
};

export default Repository;
