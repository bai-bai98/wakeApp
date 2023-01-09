import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Howl, Howler } from "howler";
import wakeUp from "./wakeup.ogg";
import megaphone2 from "../NavBar/images/megaphone2.png";
import { color } from "@mui/system";

function WarningModal(props) {
  const { isModal, setIsModal } = props;

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsModal(false);
  };

  const sound = new Howl({
    src: [wakeUp],
  });
  useEffect(() => {
    const unsub = () => {
      sound.play();
      setTimeout(() => handleClose(), 3000);
    };
    unsub();

    return unsub();
  }, []);

  //   const playSound = (e) => {
  //     e.preventDefault();
  //     sound.play();
  //   };
  return (
    <Modal show={isModal} onHide={handleClose} className="modal" style={{}}>
      <div
        style={{
          display: "flex",
          color: "#f2f2f2",
          width: "50vw",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C62828",
        }}
      >
        <div>
          <img src={megaphone2} className="megaphone2" />
          <h1 className="wakeUp">WAKE UP!!!!</h1>
        </div>
      </div>
    </Modal>
  );
}

export default WarningModal;
