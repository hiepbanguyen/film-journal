import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";

export default function ActiveUser() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [, fetch] = useAxios({ url: `Users/Active?email=${email}`, method: "POST" }, { manual: true });

  useEffect(() => {
    fetch()
      .then((res) => {
        if (res) {
          // Chuyển đến trang login
          navigate(`/sign-in?email=${email}`);
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
      });
  }, []);
}
