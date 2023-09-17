import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import ListProperty from "./screens/ListProperty";
import AppLayout from "./components/AppLayout";

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
    ]
  }
])

const App = () => <RouterProvider router={appRouter} />;

export default App;
