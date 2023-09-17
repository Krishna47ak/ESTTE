import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import ListProperty from "./screens/ListProperty";
import AppLayout from "./components/AppLayout";
import SignUp from "./screens/Signup";

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
    ]
  }
])

const App = () => <RouterProvider router={appRouter} />;

export default App;
