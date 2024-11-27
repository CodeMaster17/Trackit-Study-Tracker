import { Menu } from "@/components/Menu"
import { Sidebar } from "@/components/Sidebar"
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
            <div className="hidden md:block">
                <Menu />
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar playlists={playlists} className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <Outlet />
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