import React from "react";
import Layout from "../layouts/Layout";
import styles from "./Auth.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://e-commerce-app-hmwa.onrender.com/api/v1/auth/login",
        { email, password }
      );
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Smothing went wrong");
    }
  };

  return (
    <Layout title={"login - ecomm"}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>LOGIN FORM</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="mb-3">
            {/* <label htmlFor="Email" className="form-label">
                    Email
                    </label> */}
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label> */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            LOGIN
          </button>
          <div className="mb-0 mt-2">
            <a href="/requestforgotPassword"> Forgot Password</a>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
