import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page/error-page.jsx";
import SignUpPage from "./pages/sign-up.jsx";
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
import ListDetail from "./components/list-detail/index.jsx";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import SignInSide from "./components/auth/sign-in.jsx";

const axios = Axios.create({
  baseURL: "https://localhost:44358/api/",
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

const router = createBrowserRouter([
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
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInSide />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: ":username/list/:listId",
        element: <ListDetail />,
      },
      {
        path: "films",
        element: <Films />,
      },
      {
        path: "film/:filmId",
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
        path: "journal/:journalId",
        element: <JournalArticle />,
      },
      {
        path: ":username/",
        element: <ProfileUser />,
      },
      {
        path: ":username/review/:reviewId",
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
