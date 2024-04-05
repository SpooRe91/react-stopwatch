import { useEffect, useState } from "react";
const WINDOW_WIDTH_THRESHOLD = 766;

const useHandleScreenResize = () => {
    const [isBelowTreshold, setIsBelowThreshold] = useState(window.innerWidth < WINDOW_WIDTH_THRESHOLD);
    const screenWidth = window.innerWidth;

    useEffect(() => {
        const handleResize = () => {
            setIsBelowThreshold(window.innerWidth < WINDOW_WIDTH_THRESHOLD);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth]);

    return { isBelowTreshold };
};
export default useHandleScreenResize;
