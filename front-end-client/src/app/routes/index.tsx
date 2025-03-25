
import{
    createBrowserRouter
} from "react-router-dom";
import { Dashboard, Login } from "../pages";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard></Dashboard>,
    },
    {
        path: "/Login",
        element: <Login></Login>
    },
    {
        path: "*", // Maneja cualquier ruta no definida
        element: <NotFound></NotFound>
    }
]);

export default router;