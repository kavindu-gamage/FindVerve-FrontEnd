import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import LandingPage from "../pages/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
        path: ROUTES.LANDING,
        element: <LandingPage/>
    },
]);
export default router;
