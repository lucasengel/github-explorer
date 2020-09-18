import { shade } from "polished";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 250ms;

    &:hover {
      color: ${shade(0.2, "#a8a8b3")};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    align-items: center;
    display: flex;

    img {
      border-radius: 50%;
      flex-shrink: 0;
      height: 120px;
      width: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      & + li {
        margin-left: 80px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    display: block;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: transform 250ms;
    width: 100%;

    &:hover {
      transform: translateX(10px);

      svg {
        color: #04d361;
      }
    }

    & + a {
      margin-top: 16px;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
      transition: color 250ms;
    }
  }
`;
