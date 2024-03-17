import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import AllJobs from "../pages/AllJobs/AllJobs";
import Companies from "../pages/Companies/Companies";
import EditProfile from "../pages/EditProfile/EditProfile";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.JOBS,
    element: <AllJobs />,
  },
  {
    path: ROUTES.COMPANIES,
    element: <Companies />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.EDIT_PROFILE,
    element:<EditProfile/>
  }
]);
export default router;
