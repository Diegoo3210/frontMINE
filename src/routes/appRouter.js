import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import Taller1 from "../pages/Taller1";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="taller1" element={<Taller1 />} />
    </Route>
  )
);
