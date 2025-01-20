import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import projects from "../../projects.json";
import { useReactToPrint } from "react-to-print";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
`;

const ProjectCard = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
`;

const CVContainer = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const cvRef = useRef();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleDownloadPDF = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "CV_Nom_Prenom",
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
        </Button>
        <Button onClick={handleDownloadPDF}>Télécharger en PDF</Button>

        {/* Contenu du CV */}
        <CVContainer ref={cvRef}>
          <h1>Nom Prénom</h1>
          <p>Étudiant en Informatique | Développement Web & Mobile</p>

          <h2>Projets</h2>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </ProjectCard>
          ))}
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
