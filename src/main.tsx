import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styles } from "./helper/styles";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Search from "./pages/search";
import Form from "./pages/form";
import { ApolloProvider } from "@apollo/client";
import { client } from "./helper/client";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:contactId", element: <Contact /> },
  { path: "search", element: <Search /> },
  { path: "form", element: <Form /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global styles={styles} />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
