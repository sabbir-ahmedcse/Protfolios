import { createBrowserRouter, Navigate } from "react-router";
import Root from "../RootLayout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
