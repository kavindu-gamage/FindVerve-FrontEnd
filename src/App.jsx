import { RouterProvider } from "react-router-dom";
import Routes from "./routes/router";

export default function App() {
  return <RouterProvider router={Routes} />;
}
