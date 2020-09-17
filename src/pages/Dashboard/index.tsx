import React from "react";
import { Title, Form, Repositories } from "./style";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Github Repos</Title>
    <Form action="">
      <input type="text" placeholder="Repo name" />
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/1020229?s=460&u=979b0f2a57523c09aee2a1eaf457b0076b1baedf&v=4"
          alt="User Name"
        />
        <div>
          <strong>lucasengel/lucasengel</strong>
          <p>
            Most of my projects are on private repos, but I'm making an effort
            to update this space.
          </p>
        </div>
        <FiChevronRight size="20" />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/1020229?s=460&u=979b0f2a57523c09aee2a1eaf457b0076b1baedf&v=4"
          alt="User Name"
        />
        <div>
          <strong>lucasengel/lucasengel</strong>
          <p>
            Most of my projects are on private repos, but I'm making an effort
            to update this space.
          </p>
        </div>
        <FiChevronRight size="20" />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/1020229?s=460&u=979b0f2a57523c09aee2a1eaf457b0076b1baedf&v=4"
          alt="User Name"
        />
        <div>
          <strong>lucasengel/lucasengel</strong>
          <p>
            Most of my projects are on private repos, but I'm making an effort
            to update this space.
          </p>
        </div>
        <FiChevronRight size="20" />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/1020229?s=460&u=979b0f2a57523c09aee2a1eaf457b0076b1baedf&v=4"
          alt="User Name"
        />
        <div>
          <strong>lucasengel/lucasengel</strong>
          <p>
            Most of my projects are on private repos, but I'm making an effort
            to update this space.
          </p>
        </div>
        <FiChevronRight size="20" />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
