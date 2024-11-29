import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import FlipCard from "./FlipCard";

const CountdownTimer = () => {
    const [timeBetweenDates, setTimeBetweenDates] = useState(() => {
        // Initialize with the difference in seconds from 24 hours ahead
        const countToDate = new Date().setHours(new Date().getHours() + 24);
        return Math.ceil((countToDate - new Date().getTime()) / 1000);
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

    const flipAllCards = (time: number) => {
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
        <>
            <div className="timerContainer">
                {["Hours", "Minutes", "Seconds"].map((segment) => {
                    const segmentKey = segment.toLowerCase();
                    return (
                        <div className="timerContainer-segment" key={segment}>
                            <div className="segment-title">{segment}</div>
                            <div className="segment">
                                <FlipCard number={timeValues[`${segmentKey}Tens` as keyof typeof timeValues]} />
                                <FlipCard number={timeValues[`${segmentKey}Ones` as keyof typeof timeValues]} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <Button className="mt-4 w-1/2">
                Start timer
            </Button>
        </>
    );
};


export default CountdownTimer;
