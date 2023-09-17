import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import ListProperty from "./screens/ListProperty";
import AppLayout from "./components/AppLayout";
import SignUp from "./screens/Signup";
import SignIn from "./screens/Signin";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/list-property",
        element: <ListProperty />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
    ]
  }
])

const App = () => <RouterProvider router={appRouter} />;

export default App;
