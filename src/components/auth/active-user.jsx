import React, { useEffect } from 'react' 
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import baseAPI from '../../apis/baseAPI';

export default function ActiveUser(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search)
  const email = queryParams.get("email")
  const navigate = useNavigate();
  useEffect(()=>{
    baseAPI
      .postAsync(`Users/Active?email=${email}`)
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