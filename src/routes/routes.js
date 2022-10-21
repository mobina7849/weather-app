import { createBrowserRouter } from "react-router-dom";
import SingleItem from '../pages/singleItem/SingleItem'
import Home from "../pages/home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home  />,
    },
    {
      path: "city/:cityID",
      element: <SingleItem  />,
    }
  ]);
  
  export default router;
