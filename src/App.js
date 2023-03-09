import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {          path: "",
        element: <Login />,},
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
