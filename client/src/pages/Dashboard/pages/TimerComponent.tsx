import CountUpTimer from "@/components/CountUpTimer";

const TimerComponent = () => {
    return (
        <div className=" grid grid-rows-2 grid-cols-1 gap-4 col-span-4 p-4">
            {/* Timer Section */}
            <div className="">
                <p className="text-xl ">Count Up timer</p>
                <CountUpTimer />
            </div>
            {/* Title Section */}
            <div className="flex items-center justify-center">
                <p className="text-center text-2xl font-bold">Timer Component</p>
            </div>
        </div>
    );
};

export default TimerComponent;
