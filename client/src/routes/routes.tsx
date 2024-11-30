import Bookmarks from "@/pages/Dashboard/pages/Bookmarks";
import { Library, Timer } from 'lucide-react';
interface IRoutes {
    name: string,
    route: string,
    id: string,
    element: JSX.Element
}

export const RoutesList: IRoutes[] = [
    // {
    //     name: 'Home',
    //     route: '/',
    //     id: 'home',
    //     element: <Home />
    // },
    // {
    //     name: 'Dashboard',
    //     route: '/dashboard/home',
    //     id: 'dashboard',
    //     element: <Dashboard />
    // }

]

export const SidebarRoutes = [
    {
        name: 'Timer',
        route: '/dashboard/timer',
        id: 'timer',
        element: <Timer />,
        icon: <Timer />
    },
    {
        name: 'Resources',
        route: '/dashboard/resources',
        id: 'resources',
        element: <Bookmarks />,
        icon: <Library />
    },
    {
        name: 'Targets',
        route: '/dashboard/targets',
        id: 'targets',
        element: <Timer />,
        icon: <Timer />
    }
]