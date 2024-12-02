import DockNavigation from "@/components/DockNavigation"
import { Menu } from "@/components/Menu"
import ThemeToggleButton from "@/components/ThemeToggleButton"

import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <div className="md:hidden">
                {/* <image
                    href="/examples/music-light.png"
                    alt="Music"
                    className="block dark:hidden"
                />
                <image
                    src="/examples/music-dark.png"
                    alt="Music"
                    className="hidden dark:block"
                /> */}
            </div>
            <div className="hidden md:block min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="w-full flex justify-between items-center pr-8">
                    <Menu />
                    <ThemeToggleButton />
                </div>
                <div className="border-t ">
                    {/* #121727 */}
                    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                        <div className="grid  w-full ">
                            {/* <Sidebar playlists={playlists} className="hidden lg:block" /> */}
                            <div className="w-full  lg:col-span-4 lg:border-l bg-gray-50 dark:bg-gray-900">
                                <div className="w-full h-full px-4 py-6 lg:px-8  bg-gray-50 dark:bg-gray-900">
                                    <Outlet />
                                    <DockNavigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard