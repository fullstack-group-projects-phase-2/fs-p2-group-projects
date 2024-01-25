import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/layout";
import Hero from "../components/hero-views/hero-view";
import Login from "../components/login-views/LoginView";
import Register from "../components/register-views/RegisterView";
import Dashboard from "../components/dashboard-views/dashboard-view";
import Room from "../components/rooms/room";

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
        path: "/login",
        element: <Login />,
        loader: () => {
          if (localStorage.access_token) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/rooms",
        element: <Room />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
    ],
  },
]);

export default router;
