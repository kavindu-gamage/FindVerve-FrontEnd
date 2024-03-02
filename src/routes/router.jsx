import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import AllJobs from "../pages/AllJobs/AllJobs";
import Companies from "../pages/Companies/Companies";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage/>
    },
    {
        path : ROUTES.JOBS,
        element: <AllJobs/>
    },
    {
        path: ROUTES.COMPANIES,
        element : <Companies/>
    },
]);
export default router;
