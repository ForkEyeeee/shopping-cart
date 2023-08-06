import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../components/AboutUs";
import Cart from "../components/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "AboutUs",
          element: <AboutUs />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
      ],
    },
    // {
    //   path: "Cart",
    //   element: <Cart />,
    //   // errorElement: <ErrorPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
