import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import AboutUs from "./Presentation/AboutUs";
import TheTeam from "./Presentation/TheTeam";
import Quotes from "./Presentation/Quotes";

const Home = () => {
  return (
    <Container style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', }}>
      <Button variant="contained" sx={{ fontSize: 100 }} component={Link} to="/run" type="button" className="start">
        Start <span className="play">&#9654;</span>
      </Button>
      <AboutUs />
      <TheTeam />
      <Quotes />
    </Container>
  );
};

export default Home;
