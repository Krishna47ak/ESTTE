import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => <RouterProvider router={appRouter} />;

export default App;
