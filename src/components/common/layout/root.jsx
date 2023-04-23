import { Outlet } from "react-router-dom";
import Layout from "./layout.jsx";
import UserStore from "../../../store/user.store.js";
import React from "react";

export default function Root() {
  // console.log("render root");
  React.useEffect(() => {
    // console.log("render root in useEffect");
    UserStore.loadFromLocal(); //get user info from local
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
