import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
