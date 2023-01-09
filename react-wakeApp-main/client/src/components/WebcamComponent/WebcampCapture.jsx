import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export const WebcamCapture = ({
  setResult,
  pauseCapture,
  timeStamp,
  setTimeStamp,
}) => {
  const webcamRef = React.useRef(null);
  const [startDelay, setStartDelay] = useState(true);

  setTimeout(() => {
    setStartDelay(false);
  }, [1500]);

  useEffect(() => {
    if (startDelay || !webcamRef.current || pauseCapture) return;
    const imageSrc = webcamRef.current.getScreenshot();
    downloadImage(imageSrc);
  }, [timeStamp, webcamRef.current, startDelay]);

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const file = new File([imageBlob], "myFile.png", { type: imageBlob.type });
    uploadImageToDir(file);
  }

  const uploadImageToDir = async (photo) => {
    const formData = new FormData();
    formData.append("myImg", photo);
    const res = await fetch("http://localhost:4000/uploadForm", {
      method: "POST",
      body: formData,
    });
    const jsonData = await res.json();
    if (jsonData) {
      setResult(jsonData.message);
    }
    setTimeStamp(new Date());
  };

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
};
