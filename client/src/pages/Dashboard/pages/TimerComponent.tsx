import CountUpTimer from "@/components/CountUpTimer"

const TimerComponent = () => {
    return (
        <>

            <div className="rounded-2xl shadow-xl flex flex-col items-center justify-center w-1/2 px-4 py-8">
                <CountUpTimer />
            </div>
            {/* <div className="rounded-2xl shadow-xl flex flex-col items-center justify-center w-1/2 px-4 py-8">
                <CountdownTimer />
            </div> */}
        </>
    )
}

export default TimerComponent