import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./Discover";
import Search from "./Search";
import ErrorPage from "../common/components/ErrorMessage/ErrorPage";
import CoreLayout from "../common/layouts/CoreLayout";
import Charts from "./Charts/Charts";
import Playlists from "./Playlists/Playlists";
import Favourites from "./Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoreLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Discover />,
        errorElement: <ErrorPage />
      },
      {
        path: "/search",
        element: <Search />,
        errorElement: <ErrorPage />
      },
      {
        path: "/favourites",
        element: <Favourites />,
        errorElement: <ErrorPage />
      },
      {
        path: "/playlists",
        element: <Playlists />,
        errorElement: <ErrorPage />
      },
      {
        path: "/charts",
        element: <Charts />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
