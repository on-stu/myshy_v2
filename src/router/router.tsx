import { createBrowserRouter } from "react-router-dom";
import Headers from "../components/Headers";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Headers />,
    children: [{ path: "/", element: <MainPage /> }],
  },
  {
    path: "/:songId",
    element: <DetailPage />,
  },
]);

export default router;
