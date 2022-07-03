import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./utils/theme";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./utils/GlobalStyle";
import { ImageGallery } from "react-image-gallery";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
