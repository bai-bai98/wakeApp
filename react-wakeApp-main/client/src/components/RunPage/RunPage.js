import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import WarningModal from "../WarningModal/WarningModal";
import { WebcamCapture } from "../WebcamComponent/WebcampCapture";
import CaptureInfo from "./CaptureInfo/CaptureInfo";

const RunPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [result, setResult] = useState(-1);
  const [counterEye, setCounterEye] = useState(0);
  const [counter911, setCounter911] = useState(0);
  const [pauseCapture, setPauseCapture] = useState(false);
  const [timeStamp, setTimeStamp] = useState(new Date());

  const handleOpen = (e) => {
    e.preventDefault();
    setCounter911((counter) => counter + 1);
    setIsModal((pre) => !pre);
  };

  useEffect(() => {
    console.log("chcker");
    if (counterEye === 4) setIsModal(true);
    if (result == 0) {
      console.log("in result");
      setCounterEye((counter) => counter + 1);
    } else {
      setCounterEye(0);
    }
  }, [timeStamp]);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WebcamCapture
            setResult={setResult}
            pauseCapture={pauseCapture}
            timeStamp={timeStamp}
            setTimeStamp={setTimeStamp}
          />
          <CaptureInfo
            pauseCapture={pauseCapture}
            setPauseCapture={setPauseCapture}
          />
        </div>
      </div>
      {isModal && <WarningModal setIsModal={setIsModal} isModal={isModal} />}
      {counter911 > 3 && (
        <div className="text-danger">CALLING THE AMBULANCE!!</div>
      )}
    </>
  );
};

export default RunPage;
