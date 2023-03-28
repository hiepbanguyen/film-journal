import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page/error-page.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import SignInPage from "./pages/sign-in.jsx";
import ActiveUser from "./components/auth/active-user.jsx";
import ResetPassword from "./components/auth/reset-password.jsx";
import ForgotPassword from "./components/auth/forgot-password";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.js";
import Root from "./components/common/root.jsx";
import Home from "./components/home/index.jsx";
import Journal from "./components/journal/index.jsx";
import Lists from "./components/lists/index.jsx";
import Members from "./components/members/index.jsx";
import ReviewDetail from "./components/review-detail/index.jsx";
import ProfileUser from "./components/profile-user/index.jsx";
import FilmDetail from "./components/film-detail/index.jsx";
import JournalArticle from "./components/journal-article/index.jsx";
import Films from "./components/films/index.jsx";

const router = createBrowserRouter([
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
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "list/:listName/:listId",
        element: <Lists />,
      },
      {
        path: "films",
        element: <Films />,
      },
      {
        path: "film/:filmTitle/:filmId",
        element: <FilmDetail />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "journals",
        element: <Journal />,
      },
      {
        path: "journal/:articleHeadline/:articleId",
        element: <JournalArticle />,
      },
      {
        path: "review/:username/:reviewId",
        element: <SignInPage />,
      },
      {
        path: "member/:username",
        element: <ProfileUser />,
      },
      {
        path: "review-detail",
        element: <ReviewDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
