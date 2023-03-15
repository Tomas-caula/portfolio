
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import ReactDOM from "react-dom/client";
import index from "./index"
import App from "./App";
import React from "react";
import Calculator from "./calculator/Calculator.jsx"

function Start (  ) {
    const Home = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
        },
        {
            path: "/calculator",
            element: <Calculator/>,
        }
      ]);

      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={Home}/>
        </React.StrictMode>
      );

    
}

export default Start