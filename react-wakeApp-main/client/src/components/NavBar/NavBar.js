import { Button } from "@mui/material";
import megaphone from "./images/megaphone.png";
import useStyles from "./styles";
import {useNavigate} from 'react-router-dom'
const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <div className={classes.navbarContainer} onClick={() => navigate('/')}>
      <div className="TitleDiv">
        <div className="TitlePlusSubtitle">
          <h1 className="Title">WakeApp</h1>
          <div className="Woke">
            {" "}
            <p>Stay woke</p>
          </div>{" "}
        </div>
        <img src={megaphone} className="megaphone" />
      </div>
    </div >
  );
};

export default NavBar;
