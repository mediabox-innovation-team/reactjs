// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
     createBrowserRouter,
     RouterProvider,
} from "react-router-dom";
import "./index.css";
import RootPage from "./routes/RootPage";
import ErrorPage from "./components/ErrorPage";
import NouveauUtilisateurPage from "./routes/NouveauUtilisateurPage";
import DetailUtilisateurPage from "./routes/DetailUtilisateurPage";

const router = createBrowserRouter([
     {
          path: "/",
          element: <RootPage />,
          errorElement: <ErrorPage />
     },
     {
          path: "/new_user",
          element: <NouveauUtilisateurPage />,
          errorElement: <ErrorPage />
     },
     {
          path: "/utilisateurs/:id",
          element: <DetailUtilisateurPage />,
          errorElement: <ErrorPage />
     },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <RouterProvider router={router} />
     </React.StrictMode>
);