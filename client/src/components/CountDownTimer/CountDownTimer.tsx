import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [timeBetweenDates, setTimeBetweenDates] = useState(() => {
        // Initialize with the difference in seconds from 24 hours ahead
        const countToDate = new Date().setHours(new Date().getHours() + 24);
        return Math.ceil((countToDate - new Date()) / 1000);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeBetweenDates((prevTime) => {
                // Ensure the countdown stops at 0
                return prevTime > 0 ? prevTime - 1 : 0;
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const flipAllCards = (time) => {
        const seconds = time % 60;
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);

        return {
            hoursTens: Math.floor(hours / 10),
            hoursOnes: hours % 10,
            minutesTens: Math.floor(minutes / 10),
            minutesOnes: minutes % 10,
            secondsTens: Math.floor(seconds / 10),
            secondsOnes: seconds % 10,
        };
    };

    const timeValues = flipAllCards(timeBetweenDates);

    return (
        <div className="container">
            {["Hours", "Minutes", "Seconds"].map((segment, idx) => {
                const segmentKey = segment.toLowerCase();
                return (
                    <div className="container-segment" key={segment}>
                        <div className="segment-title">{segment}</div>
                        <div className="segment">
                            <FlipCard number={timeValues[`${segmentKey}Tens`]} />
                            <FlipCard number={timeValues[`${segmentKey}Ones`]} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

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
        <div className={`flip-card ${flip ? "flip" : ""}`}>
            <div className="top">{currentNumber}</div>
            <div className="bottom">{number}</div>
            <div className="top-flip">{currentNumber}</div>
            <div className="bottom-flip">{number}</div>
        </div>
    );
};

export default CountdownTimer;
