import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../components/AboutUs";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
import Hero from "../components/Hero";
import ItemList from "../components/ItemList";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/Cart", element: <Cart /> },
        { path: "/AboutUs", element: <AboutUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
