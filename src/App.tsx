import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/constacts/Contacts";
import { Slogan } from "./layout/sections/constacts/slogan/Slogan";
import { Footer } from "./layout/sections/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Works />
        <Testimony />
        <Contacts />
        <Slogan />
        <Footer />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

const StyledMainContainer = styled.div`

/* @media (max-width: 1281px) {
   
}
  @media (min-width: 1280px) {
    width: 70vw;
    margin-left: 15vw;
  } */
`;
