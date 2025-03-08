import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export const Auth = () => {
  const navigate = useNavigate();

  axios.interceptors.request.use(
    function (config) {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401) {
        if (Cookies.get("token")) {
          Cookies.remove("token");
        }
        navigate("/");
      }
      return Promise.reject(error);
    }
  );

  return <></>;
};
