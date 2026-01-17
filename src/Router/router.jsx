import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"/skills",
        Component:Skills
      },
      {
        path:"/projects",
        Component:Projects
      },
      {
        path: "/about",
        Component: About
      }
     
    ],
  },
]);

export default router;
