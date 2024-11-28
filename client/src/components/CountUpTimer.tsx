import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import FlipCard from "./FlipCard";
import { Pause } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
const CountUpTimer = () => {

    const [timeElapsed, setTimeElapsed] = useState<number>(() => {
        const savedTime = localStorage.getItem("timeElapsed");
        return savedTime ? parseInt(savedTime, 10) : 0;
    });


    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [showResetButton, setShowResetButton] = useState<boolean>(false);

    // handle start timer
    const handleStartTimer = () => {
        // start the clock
        // show pause button
        setIsRunning(true);
        setIsPaused(false);
    }

    // handle reset timer
    const handleResetTimer = () => {
        setTimeElapsed(0);
        setIsRunning(false);
        setIsPaused(false);
        localStorage.removeItem("timeElapsed");
    }

    // handle pause timer
    const handlePauseTimer = () => {
        setIsPaused(true);
        setIsRunning(false);
    }

    // get item from local storage
    useEffect(() => {
        const savedTime = localStorage.getItem("timeElapsed");
        if (savedTime) {
            setTimeElapsed(parseInt(savedTime, 10));
            setShowResetButton(true)
            setIsPaused(false)
        }
        else {
            setShowResetButton(false)
        }
    }, [timeElapsed]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed((prevTime) => {
                    const updatedTime = prevTime + 1;
                    localStorage.setItem("timeElapsed", updatedTime.toString());
                    return updatedTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [isRunning]);

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

    const timeValues = flipAllCards(timeElapsed);

    return (
        <>
            <p className="text-2xl">Count Up timer</p>
            <div className="container">
                {["Hours", "Minutes", "Seconds"].map((segment) => {
                    const segmentKey = segment.toLowerCase();
                    return (
                        <div className="container-segment" key={segment}>
                            <div className="segment-title">{segment}</div>
                            <div className="segment">
                                <FlipCard number={timeValues[`${segmentKey}Tens` as keyof typeof timeValues]} />
                                <FlipCard number={timeValues[`${segmentKey}Ones` as keyof typeof timeValues]} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex justify-between gap-8">
                {/* start button */}
                {!isRunning && <Button className="mt-4 w-1/2" onClick={() => handleStartTimer()}>
                    <CirclePlay />
                    Start
                </Button>}

                {isRunning && <Button variant={"secondary"} className="mt-4 w-1/2" onClick={() => handlePauseTimer()}>
                    <Pause />
                    Pause
                </Button>}


                {/* reset button */}
                {showResetButton && <Button variant={"destructive"} className="mt-4 w-1/2" onClick={() => handleResetTimer()}>
                    <RotateCcw />
                    Reset Timer
                </Button>}
            </div>
        </>
    );
};


export default CountUpTimer;
