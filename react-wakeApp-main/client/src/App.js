import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./components/Home/Home";
import RunPage from "./components/RunPage/RunPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Container maxWidth="lg">
          <Routes>
            {/* Visitor */}
            <Route path="/" element={<Home />} />
            <Route path="/run" element={<RunPage />} />
          </Routes>
        </Container>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
