import { useRef, useState } from "react";
import styles from "./stopwatch.module.css";

export const StopWatchComp = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const [isActive, setIsactive] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);
    const [status, setStatus] = useState(null);

    const intervalRef = useRef(null);
    const statusRef = useRef(null);
    let secondsPassed = 0;


    const handleStart = () => {
        if (startTime !== null && now !== null) {
            secondsPassed = (now - startTime) / 1000;
        }
        setStatus(state => "Start");
        setMessageVisible(state => !state);
        setStartTime(Date.now());
        setNow(Date.now());
        setIsactive(state => !state);

        statusRef.current = 'Start';
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        setStatus(state => "Stop");
        setMessageVisible(state => !state);
        clearInterval(intervalRef.current);
        statusRef.current = 'Stop';
    };

    const handleClear = () => {
        clearInterval(intervalRef.current);

        setStatus(state => "Clear");
        setMessageVisible(state => !state);
        setNow(state => null);
        setStartTime(state => null);
        intervalRef.current = null;

        statusRef.current = 'Clear';
    };


    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }

    if (messageVisible) {
        setTimeout(() => {
            setMessageVisible(state => false);
        }, 250);
    }

    return (
        <section>
            <div className={styles["container"]}>
                {
                    status !== null &&
                    messageVisible &&
                    <div className={styles["message"]}>
                        {
                            status === "Start" &&
                            <p className={styles["message-start"]}>TIMER STARTED</p>
                        }
                        {
                            status === "Stop" &&
                            <p className={styles["message-stop"]}> TIMER STOPPED</p>
                        }
                        {
                            status === "Clear" &&
                            <p className={styles["message-clear"]}> TIMER CLEARED</p>
                        }
                    </div>
                }
                <div className={styles["time"]}>
                    <h1 className={styles["current-time"]}>Time:</h1>
                    <p className={styles["time-passed"]}> {secondsPassed.toFixed(3)}</p>
                </div>
                <div className={styles["buttons-container"]}>
                    <button className={styles["start"]} disabled={statusRef.current === "Start"} onClick={() => handleStart()}>
                        {
                            now !== null
                                ?
                                statusRef.current === "Start"
                                    ? "Start"
                                    : "Restart"
                                :
                                "Start"
                        }
                    </button>
                    <button className={styles["stop"]} disabled={!isActive} onClick={() => [handleStop(), setIsactive(sate => false)]}>Stop</button>
                    <button className={styles["clear"]} disabled={isActive} onClick={() => handleClear()}>Clear</button>
                </div>
            </div>
        </section >
    );
}
