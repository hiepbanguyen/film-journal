import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import SignUpPage from "./pages/sign-up.jsx";
import HomePage from "./pages/home-page.jsx";
import SignInPage from "./pages/sign-in.jsx";
import ReviewDetailPage from "./pages/review-detail.jsx";
import ActiveUser from "./components/auth/active-user.jsx";
import "./index.css";
import MembersPage from "./pages/members-page";
import Settings from "./pages/profile";
import ListPage from "./pages/list";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.js";
import UserProfile from "./pages/user-profile";

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
    element: <MembersPage />
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
    path: "/review-detail",
    element: <ReviewDetailPage />,
   },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
