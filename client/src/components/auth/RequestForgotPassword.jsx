import React, { useState } from "react";
import Layout from "../layouts/Layout";
import styles from "./Auth.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Alert } from "bootstrap";

const RequestForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!email) {
    //   return Alert.alert("empty field");
    // }
    try {
      const res = await fetch(
        "https://e-commerce-app-hmwa.onrender.com/api/v1/auth/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      // const res = await axios.post(
      //   "https://e-commerce-app-hmwa.onrender.com/api/v1/auth/forgotPassword",
      //   { email }
      // );

      console.log(data.data.success);
      if (data.data.success) {
        // toast.success(res.data && res.data.message);
        Alert.alert(
          "Reset email sent please check your mail box and reset password"
        );
        // navigate('');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Smothing went wrong");
    }
  };

  return (
    <Layout title={"request-forgotPassword"}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Request Forgot Password</h1>
        <form className={styles.form}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
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
          <button
            onClick={handleSubmit}
            type="submit"
            className={styles.button}
          >
            SEND OTP
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RequestForgotPassword;
