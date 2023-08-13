import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "profile/:name",
            element: <Profile />,
        },
    ]);

    return <RouterProvider router={router} />
};

export default Router;
