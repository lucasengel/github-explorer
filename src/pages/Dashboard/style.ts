import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 4.8rem;
  line-height: 56px;
  margin-top: 80px;
  min-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border-radius: 5px 0 0 5px;
    border: 0;
    color: #3a3a3a;
    flex: 1;
    height: 70px;
    padding: 0 24px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 70px;
    transition: background-color 250ms;
    width: 210px;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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
      flex-shrink: 0;
      flex-grow: 0;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

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
      flex-shrink: 0;
      flex-grow: 0;
      transition: color 250ms;
    }
  }
`;
