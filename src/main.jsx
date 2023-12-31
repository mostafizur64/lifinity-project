import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/Route.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#030014]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
