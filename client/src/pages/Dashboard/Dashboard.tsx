import DockNavigation from "@/components/DockNavigation"
import { Menu } from "@/components/Menu"
import { Sidebar } from "@/components/Sidebar"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { playlists } from "@/constants/playlists"

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
            <div className="hidden md:block min-h-screen">
                <div className="w-full flex justify-between items-center pr-8">
                    <Menu />
                    <ThemeToggleButton />
                </div>
                <div className="border-t ">
                    <div className="bg-background ">
                        <div className="grid  w-full relative">
                            {/* <Sidebar playlists={playlists} className="hidden lg:block" /> */}
                            <div className="w-full  lg:col-span-4 lg:border-l">
                                <div className="w-full h-full px-4 py-6 lg:px-8 relative ">
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