import { Home } from "./components/Home";
import { About } from "./components/About";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/About',
        element: <About />
    },
]

export default AppRoutes;