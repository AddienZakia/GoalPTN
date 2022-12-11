import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root";
import Beranda from "./Routes/Beranda";
import Snbp from "./Routes/Snbp";
import Snbt from "./Routes/Snbt";
import Mandiri from "./Routes/Mandiri";
import Error from "./Component/Error";
import "./Styles/output.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Beranda />,
        },
        {
          path: "snbp",
          element: <Snbp />,
        },
        {
          path: "snbt",
          element: <Snbt />,
        },
        {
          path: "mandiri",
          element: <Mandiri />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
