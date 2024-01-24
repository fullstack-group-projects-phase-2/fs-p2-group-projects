import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/layout";
import Hero from "../components/hero-views/hero-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
