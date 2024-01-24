import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/layout";
import Hero from "../components/hero-views/hero-view";
import LoginView from "../components/LoginView";
import RegisterView from "../components/RegisterView";

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
      {
        path: "login",
        element: <LoginView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
    ],
  },
]);

export default router;
