/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 28 2023
 * @desc main.tsx
 * This page render a simple router
 */

import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "../routes/root";
import { HelloWorldApp } from "../components/HelloWorldApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/hello",
    element: <HelloWorldApp />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);