import { Outlet } from "react-router-dom";
import Layout from "./layout";
import UserStore from "../../store/user.store.js";
import React from "react";

export default function Root() {
  React.useEffect(() => {
    UserStore.loadFromLocal(); //get user info from local
  }, []);

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
