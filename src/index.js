import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./page/WelcomePage";
import SuccessPage from "./page/SuccessPage";
import OrderPage from "./page/OrderPage";
import NutrientAnalysisPage from "./page/NutrientAnalysisPage";
import AllergySelectPage from "./page/AllergySelectPage";
import { DataProvider } from "./context/DataContext";

import BackApp from "./controller/BackApp";
import PublicComponentPage from "./page/publicComponentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/nutrient-analysis",
    element: <NutrientAnalysisPage />,
  },
  {
    path: "/allergy-select",
    element: <AllergySelectPage />,
  },
  {
    path: "/backApp",
    element: <BackApp />,
  },
  {
    path: "/*",
    element: <PublicComponentPage />,
  },
],
  {
    basename: '/green-light',
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
);

reportWebVitals();
