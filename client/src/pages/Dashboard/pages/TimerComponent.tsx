import CountUpTimer from "@/components/CountUpTimer";

export default function TimerComponent() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="mt-2 grid grid-cols-2 gap-4 sm:mt-4 lg:grid-rows-1 lg:grid-cols-3  lg:rounded-tl-[2rem] bg-gray-50 dark:bg-gray-900 ">

                {/* Top Left: Larger Box */}
                <div className="relative row-span-2  col-span-2 bg-white   lg:rounded-tl-[2rem] rounded-tr-[calc(theme(borderRadius.lg)+1px)] rounded-b-[calc(theme(borderRadius.lg)+1px)] bg-gradient-to-br  from-orange-500/50 to-yellow-500/50 " >
                    <div className="relative flex h-full flex-col overflow-hidden  lg:rounded-tl-[2rem] p-4 from-orange-500/50 to-yellow-500/50">
                        <CountUpTimer />
                    </div>
                </div>

                {/* Top Right: Smaller Box */}
                <div className="relative col-span-1 row-span-2  lg:rounded-tr-[2rem] rounded-[calc(theme(borderRadius.lg)+1px)] bg-gradient-to-br from-[#11B8A1] to-[#0d9482] dark:from-[#11B8A1]/90 dark:to-[#0d9482]/90">

                    <div className="absolute inset-0 bg-gradient-to-br from-[#11B8A1] to-[#0d9482] dark:from-[#11B8A1]/90 dark:to-[#0d9482]/9 opacity-95 dark:opacity-90 rounded-[calc(theme(borderRadius.lg)+1px)] " />

                    <div className="relative flex h-full flex-col gap-2 overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[2rem]  px-4 bg-gradient-to-br from-[#11B8A1] to-[#0d9482] dark:from-[#11B8A1]/90 dark:to-[#0d9482]/9">

                        <p className="mt-2 text-lg font-medium tracking-tight text-center">
                            Previous Sessions
                        </p>
                        <div className=" h-12 rounded-[0.5rem] group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/10" style={{
                            animation: `fadeSlideIn 0.5s ease-out ${0 * 0.1}s both`
                        }}>
                            d
                        </div>
                        <div className=" h-12 rounded-[0.5rem] group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/10" style={{
                            animation: `fadeSlideIn 0.5s ease-out ${1 * 0.1}s both`
                        }}>
                            d
                        </div>
                        <div className=" h-12 rounded-[0.5rem] group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/10" style={{
                            animation: `fadeSlideIn 0.5s ease-out ${2 * 0.1}s both`
                        }}>
                            d
                        </div>
                        <div className=" h-12 rounded-[0.5rem] group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/10" style={{
                            animation: `fadeSlideIn 0.5s ease-out ${3 * 0.1}s both`
                        }}>
                            d
                        </div>

                    </div>
                    {/* <div className={`
                  absolute inset-0 bg-gradient-to-r ${feature.gradient}
                  opacity-0 group-hover:opacity-5 transition-opacity duration-300
                `} /> */}
                </div>

                {/* Bottom Left: Smaller Box */}
                <div className="relative  border-gray-500 row-span-2 col-span-1 dark:bg-background ">
                    <div className="absolute inset-px rounded-lg bg-white dark:bg-background"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] dark:bg-background">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Security</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-center">
                                Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                            </p>
                        </div>

                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>

                {/* Bottom Right: Larger Box */}
                <div className="relative row-span-2 border-2 col-span-2 dark:bg-background">
                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem] dark:bg-background"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)] dark:bg-background">
                        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">
                                Powerful APIs
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-center">
                                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        <div className="relative min-h-[30rem] w-full grow ">
                            <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                            NotificationSetting.jsx
                                        </div>
                                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                    </div>
                                </div>
                                <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
                </div>
            </div>
        </div>
    )
}
