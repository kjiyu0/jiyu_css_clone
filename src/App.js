import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { HadhRouter as BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import theme from "./utils/theme";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./utils/GlobalStyle";
import { ImageGallery } from "react-image-gallery";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
