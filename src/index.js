import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayPage from "./Components/DisplayPage";
import ErrorPage from "./Components/ErrorPage";
import { UserProvider } from "./Components/UserContext";
import { EducationProvider } from "./Components/EducationContext";
import { ExperienceProvider } from "./Components/ExperienceContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <EducationProvider>
          <ExperienceProvider>
            <App />
          </ExperienceProvider>
        </EducationProvider>
      </UserProvider>
    ),
  },
  {
    path: "/result",
    element: (
      <UserProvider>
        <EducationProvider>
          <ExperienceProvider>
            <DisplayPage />
          </ExperienceProvider>
        </EducationProvider>
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// reportWebVitals();
