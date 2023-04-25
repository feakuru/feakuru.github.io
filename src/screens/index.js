import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainScreen from "./main";

const router = createBrowserRouter([
    {
        path: "/",
        element: MainScreen(),
    },
]);

function Screens() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Screens;
