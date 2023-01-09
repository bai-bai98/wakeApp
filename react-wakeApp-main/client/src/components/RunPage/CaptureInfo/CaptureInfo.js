import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch({ pauseCapture }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    useEffect(() => {

        if (pauseCapture) {
            pause()
        } else {
            start()

        }
    }, [pauseCapture])

    return (
        <div>
            <div style={{ fontSize: '50px', display: 'flex', alignItems: 'center', width: 400 }}>
                <p>Driving Time</p>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    );
}

const CaptureInfo = ({ pauseCapture, setPauseCapture }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' ,marginLeft: 15, height:"100%"}}>
            <Button
                variant="contained"
                color={pauseCapture ? "success" : "error"}
                sx={{ width: "100%", flex: "1",  minHeight: '100px' }}
                onClick={() => { setPauseCapture(prev => !prev) }}>{pauseCapture ? 'Resume' : 'Pause'}</Button>
            <MyStopwatch pauseCapture={pauseCapture} />
        </div>
    );
}

export default CaptureInfo
