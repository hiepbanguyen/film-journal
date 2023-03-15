import React, { useEffect } from 'react' 
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ConstantURL from "../../script/resources/ConstantURL.js";
import { useNavigate } from "react-router-dom";
export default function ActiveUser(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search)
  const email = queryParams.get("email")
  const navigate = useNavigate();
  useEffect(()=>{
    axios
      .post(`${ConstantURL.BaseDomain}Users/Active?email=${email}`)
      .then((res) => {
        if (res) {
          // Chuyển đến trang login
          navigate(`/sign-in?email=${email}`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },[]);
}