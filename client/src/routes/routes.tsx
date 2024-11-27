import Dashboard from "@/pages/Dashboard/Dashboard"
import Home from "@/pages/Home/Home"

interface IRoutes {
    name: string,
    route: string,
    id: string,
    element: JSX.Element
}

export const RoutesList: IRoutes[] = [
    {
        name: 'Home',
        route: '/',
        id: 'home',
        element: <Home />
    },
    {
        name: 'Dashboard',
        route: '/dashboard',
        id: 'dashboard',
        element: <Dashboard />
    }

]