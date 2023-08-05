import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../components/AboutUs";

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
      ],
    },
    // {
    //   path: "AboutUs",
    //   element: <AboutUs />,
    //   // errorElement: <ErrorPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
