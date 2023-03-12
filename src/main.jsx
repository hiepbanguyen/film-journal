import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import SignUpPage from "./pages/sign-up.jsx";
import HomePage from "./pages/home-page.jsx";
import SignInPage from "./pages/sign-in.jsx";
import ActiveUser from "./components/auth/active-user.jsx";
import "./index.css";
import Settings from "./pages/profile";
import ListPage from "./pages/list";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/active-user",
    element: <ActiveUser />,
  },
  {
    path: "/lists",
    element: <ListPage />,
  },
  {
    path: "/films",
    element: <SignInPage />,
  },
  {
    path: "/members",
    element: <SignInPage />,
  },
  {
    path: "/journal",
    element: <SignInPage />,
  },
  {
    path: "/review/:reviewId",
    element: <SignInPage />,
  },
  {
    path: "/film/:filmTitle/:filmId",
    element: <SignInPage />,
  },
  {
    path: "/member/:userName",
    element: <SignInPage />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
