import { useState, useEffect } from "react";

const FlipCard = ({ number }) => {
    const [currentNumber, setCurrentNumber] = useState(number);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        if (currentNumber !== number) {
            setFlip(true); // Trigger flip animation
            setTimeout(() => {
                setCurrentNumber(number);
                setFlip(false); // Reset flip state
            }, 10); // Adjust timing to match animation duration
        }
    }, [number, currentNumber]);

    return (
        <>
            <div className={`flip-card ${flip ? "flip" : ""}`}>
                <div className="top">{currentNumber}</div>
                <div className="bottom">{number}</div>
                <div className="top-flip">{currentNumber}</div>
                <div className="bottom-flip">{number}</div>
            </div>

        </>
    );
};

export default FlipCard