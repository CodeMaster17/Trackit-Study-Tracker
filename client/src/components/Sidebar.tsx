import { Playlist } from "@/constants/playlists";
import { cn } from "@/lib/utils";
import { SidebarRoutes } from '../routes/routes';
import { Button } from "./ui/button";



interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>

                    <div className="space-y-1">
                        {SidebarRoutes.map((item) => {
                            return (
                                <Button key={item.id} variant="link" className="w-full justify-start">
                                    <a href={item.route} className="w-full justify-start inline-flex items-center  gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                                        {item.icon}
                                        {item.name}
                                    </a>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}