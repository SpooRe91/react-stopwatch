import React, { useRef, useState, useEffect } from "react";
import styles from "./stopwatch.module.css";
import useHandleScreenResize from "../../hooks/useScreenResize";
import { PlayArrow, Stop, Clear } from "@mui/icons-material";

export const StopwatchComponent = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);

    const { isBelowTreshold } = useHandleScreenResize();

    const intervalRef = useRef(null);
    const statusRef = useRef(null);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalId);
    }, [isActive]);

    const handleStart = () => {
        setMessageVisible(!messageVisible);
        setIsActive(true);
    };

    const handleStop = () => {
        if (elapsedTime === 0) {
            return;
        }
        statusRef.current = "Stop";
        setMessageVisible(!messageVisible);
        setIsActive(false);
    };

    const handleClear = () => {
        statusRef.current = null;
        clearInterval(intervalRef.current);
        setMessageVisible(!messageVisible);
        setIsActive(false);
        setElapsedTime(0);
    };

    return (
        <section>
            <div
                data-testid="container"
                className={styles[!isBelowTreshold ? "container" : "container-mobile"]}
            >
                <div className={styles[!isBelowTreshold ? "time" : "time-mobile"]}>
                    <h1 className={styles[!isBelowTreshold ? "current-time" : "current-time-mobile"]}>
                        Time elapsed: {new Date(elapsedTime).toISOString().substring(11, 19)}
                    </h1>
                </div>
                <div
                    data-testid="buttons-container"
                    className={styles[!isBelowTreshold ? "buttons-container" : "buttons-container-mobile"]}
                >
                    <div
                        className={
                            styles[
                                !isBelowTreshold
                                    ? "buttons-inner-container"
                                    : "buttons-inner-container-mobile"
                            ]
                        }
                    >
                        <button
                            aria-label="Start"
                            title="Start"
                            data-testid="start"
                            className={styles["start"]}
                            disabled={isActive}
                            onClick={handleStart}
                        >
                            {!isBelowTreshold ? (
                                "Start"
                            ) : (
                                <PlayArrow htmlColor="green" style={{ fontSize: "2rem" }} />
                            )}
                        </button>

                        <button
                            aria-label="Stop"
                            title="Stop"
                            data-testid="stop"
                            className={styles["stop"]}
                            disabled={!isActive}
                            onClick={handleStop}
                        >
                            {!isBelowTreshold ? (
                                "Stop"
                            ) : (
                                <Stop htmlColor="red" style={{ fontSize: "2rem" }} />
                            )}
                        </button>
                        {statusRef.current === "Stop" ? (
                            <button
                                aria-label="CLear"
                                title="Clear"
                                data-testid="clear"
                                className={styles["clear"]}
                                onClick={handleClear}
                            >
                                {!isBelowTreshold ? (
                                    "Clear"
                                ) : (
                                    <Clear htmlColor="lightblue" style={{ fontSize: "2rem" }} />
                                )}
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default StopwatchComponent;
