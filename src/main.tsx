import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styles } from "./helper/styles";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Search from "./pages/search";
import Form from "./pages/form";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:contactId", element: <Contact /> },
  { path: "search", element: <Search /> },
  { path: "form", element: <Form /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={styles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
