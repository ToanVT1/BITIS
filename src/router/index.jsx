import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserTemplate } from "../atomic/templates/user";
//Lazy Load

const ShowingMovie = lazy(() => import("../atomic/pages/men"));
const Home = lazy(()=> import("../atomic/pages/home"));
const CommingMovie = lazy(()=>import("../atomic/pages/comming-movie"))
const DetailMovie = lazy(()=>import("../atomic/pages/detail-movie"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element: <Home/>
      },

      {
        path: "men",
        element: <ShowingMovie/>,
      },

      {
        path: "coming-movie",
        element: <CommingMovie/>,
      },
      {// params: truyen duoc mot tham so
        path: "movie/:id",
        element: <DetailMovie />,
      },

      {//search params: truyen duoc nhieu tham so
        //movie?id=123&q-456
        // path: "movie",
        // element: <DetailMovie />,
      },
    ],
  },

  {
    path: "*",
    // C1: Custom Page Not Found
    // element: <>Not Found</>,

    // C2: Mong muốn chuyển về trang home
    element: <Navigate to={"/"} replace />,
  },
]);
