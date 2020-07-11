import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do usuário/repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
        <a href="www">
          <img
            src="https://avatars2.githubusercontent.com/u/49796681?s=460&u=579efd4aa76676bd78d9bb2599fa824d7e77dd1c&v=4"
            alt="Victor Rabelo"
          />
          <div>
            <strong>victor3r/challenge-typeorm-upload</strong>
            <p>
              Challenge about Node.js and TypeScript including TypeORM and
              Multer applied in GoStack Bootcamp
            </p>
          </div>

          <FiChevronRight size={32} color="#CBCBD6" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
