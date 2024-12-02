import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import FlipCard from "./FlipCard";
import { Pause } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
import GradientButton from "./utils/GradientButton";
const CountUpTimer = () => {

    const [timeElapsed, setTimeElapsed] = useState<number>(() => {
        const savedTime = localStorage.getItem("timeElapsed");
        return savedTime ? parseInt(savedTime, 10) : 0;
    });


    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [showResetButton, setShowResetButton] = useState<boolean>(false);

    const startTimeRef = useRef<number | null>(null);

    // handle start timer
    const handleStartTimer = () => {
        // start the clock
        // show pause button
        setIsRunning(true);
        setIsPaused(false);
        startTimeRef.current = Date.now() - timeElapsed * 1000;
    }

    // handle reset timer
    const handleResetTimer = () => {
        setTimeElapsed(0);
        setIsRunning(false);
        setIsPaused(false);
        localStorage.removeItem("timeElapsed");
        startTimeRef.current = null;
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
        let animationFrame: number = 0;

        const updateTimer = () => {
            if (isRunning && startTimeRef.current !== null) {
                const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
                setTimeElapsed(elapsed);
                localStorage.setItem("timeElapsed", elapsed.toString());
            }
            animationFrame = requestAnimationFrame(updateTimer);
        }
        if (isRunning) {
            updateTimer();
        } else {
            cancelAnimationFrame(animationFrame);
        }

        return () => cancelAnimationFrame(animationFrame);
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
            <div className="timerContainer flex mt-2 items-center justify-center rounded-2xl  px-4 py-8">
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
            <div className="w-full flex justify-between items-center gap-8">
                {/* start button */}
                {/* {!isRunning && <Button className="mt-4 w-1/2" onClick={() => handleStartTimer()}>
                    <CirclePlay />
                    {isPaused ? "Resume" : "Start"}
                </Button>} */}

                {/* {isRunning && <Button variant={"secondary"} className="mt-4 w-1/2" onClick={() => handlePauseTimer()}>
                    <Pause />
                    Pause
                </Button>} */}


                {/* reset button */}
                {/* {showResetButton && <Button variant={"destructive"} className="mt-4 w-1/2" onClick={() => handleResetTimer()}>
                    <RotateCcw />
                    Reset Timer
                </Button>} */}

                {!isRunning && <GradientButton
                    key="Start"
                    gradient="from-orange-500 to-yellow-500"
                    variant="primary"
                    onClick={() => handleStartTimer()}
                >
                    <CirclePlay />
                    {isPaused ? "Resume" : "Start"}
                </GradientButton>
                }
                {isRunning && <GradientButton
                    key="Pause"
                    gradient="from-orange-500 to-yellow-500"
                    variant="primary"
                    onClick={() => handlePauseTimer()}
                >
                    <Pause />
                    {isPaused ? "Resume" : "Start"}
                </GradientButton>}

                {showResetButton && <GradientButton
                    key="Reset"
                    gradient=""
                    variant="primary"
                    onClick={() => handleResetTimer()}
                    className="bg-none  border-2 hover:border-black bg-transparent text-black hover:bg-transparent hover:text-black "
                >
                    <RotateCcw />
                    Reset Timer
                </GradientButton>}
            </div>
        </>
    );
};


export default CountUpTimer;
