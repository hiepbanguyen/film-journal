import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page/error-page.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import SignInPage from "./pages/sign-in.jsx";
import ActiveUser from "./components/auth/active-user.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.js";
import Root from "./components/common/root.jsx";
import Home from "./components/home/index.jsx";
import Journal from "./components/journal/index.jsx";
import Lists from "./components/lists/index.jsx";
import Members from "./components/members/index.jsx";
import ReviewDetail from "./components/review-detail/index.jsx";
import ProfileUser from "./components/profile-user/index.jsx";
import Settings from "./components/settings/index.jsx";
import FilmDetail from "./components/film-detail/index.jsx";
import JournalArticle from "./components/journal-article/index.jsx";

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
        path: "films",
        element: <SignInPage />,
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
        path: "journal/:journalArticle",
        element: <JournalArticle />,
      },
      {
        path: "review/:reviewId",
        element: <SignInPage />,
      },
      {
        path: "film/:filmTitle/:filmId",
        element: <FilmDetail />,
      },
      {
        path: "member/:userName",
        element: <SignInPage />,
      },
      {
        path: "review-detail",
        element: <ReviewDetail />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <ProfileUser />,
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
