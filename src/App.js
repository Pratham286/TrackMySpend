import styled, { ThemeProvider } from "styled-components";
import React from "react";
import HomeComponent from "./modules/home";
import { FaMoneyCheckAlt } from "react-icons/fa";

// Define the theme outside of the component for better separation of concerns
const theme = {
  colors: {
    primary: "#0d1d2c",
    secondary: "#f5f5f5",
    accent: "#4CAF50",
  },
  fonts: {
    main: "Montserrat, sans-serif",
  },
};

// Styled components
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  width: 95%;
  padding-top: 30px;
  font-family: ${(props) => props.theme.fonts.main};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(FaMoneyCheckAlt)`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.accent};
`;

// const Footer = styled.footer`
//   background-color: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.secondary};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   font-size: 14px;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
// `;

// App component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo size={30} />
          TrackMySpend
        </Header>
        
        <HomeComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
