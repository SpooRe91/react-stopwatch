import { useRef, useState } from "react";
import styles from "./stopwatch.module.css";

export const StopWatchComp = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const [isActive, setIsactive] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);

    const intervalRef = useRef(null);
    const statusRef = useRef(null);

    let secondsPassed = 0;
    let minsPassed = 0;
    let hrsPassed = 0;

    const handleStart = () => {
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
        setMessageVisible(state => !state);
        clearInterval(intervalRef.current);
        statusRef.current = 'Stop';
    };

    const handleClear = () => {
        clearInterval(intervalRef.current);
        setMessageVisible(state => !state);

        setNow(state => null);
        setStartTime(state => null);
        intervalRef.current = null;
        statusRef.current = 'Clear';
    };

    if (startTime !== null && now !== null) {
        secondsPassed = ((now - startTime) / 1000).toFixed(3);
        minsPassed = Math.floor(secondsPassed / 60).toFixed(0);
        hrsPassed = Math.floor(minsPassed / 60).toFixed(0);

    }

    if (messageVisible) {
        setTimeout(() => {
            setMessageVisible(state => false);
        }, 250);
    }

    return (
        <section>
            <div className={styles["container"]}>

                <div className={styles["time"]}>
                    <h1 className={styles["current-time"]}>Time elapsed:
                        {
                            !isActive &&
                            <p>
                                {hrsPassed} {hrsPassed < 1 ? "hr" : "hrs"} : {minsPassed} {minsPassed <= 1 ? "min" : "mins"} : {secondsPassed !== null && secondsPassed} sec
                            </p>
                        }
                    </h1>
                    {
                        isActive &&
                        <p className={styles["time-passed"]}> {secondsPassed}</p>
                    }
                    <div className={styles["message-container"]}>
                        {
                            statusRef.current !== null &&
                            messageVisible &&
                            <div className={styles["message"]}>
                                {
                                    statusRef.current === "Start" &&
                                    <p className={styles["message-start"]}>TIMER RUNNING</p>
                                }
                                {
                                    statusRef.current === "Stop" &&
                                    <p className={styles["message-stop"]}> TIMER STOPPED</p>
                                }
                                {
                                    statusRef.current === "Clear" &&
                                    <p className={styles["message-clear"]}> TIMER CLEARED</p>
                                }
                            </div>
                        }
                    </div>
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
                    {
                        !isActive &&
                        <button className={styles["clear"]} disabled={now === null} onClick={() => handleClear()}>Clear</button>
                    }
                </div>
            </div>

            <div></div>
        </section >
    );
}
