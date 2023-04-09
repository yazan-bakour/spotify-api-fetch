import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./Discover";
import Search from "./Search";
import ErrorPage from "../common/components/ErrorMessage/ErrorPage";
import CoreLayout from "../common/layouts/CoreLayout";
import Charts from "./Charts/Charts";

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
        element: '',
        errorElement: <ErrorPage />
      },
      {
        path: "/playlists",
        element: '',
        errorElement: <ErrorPage />
      },
      {
        path: "/charts",
        element: '',
        errorElement: <Charts />
      }
    ]
  }
]);

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
