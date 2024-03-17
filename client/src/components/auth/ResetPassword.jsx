import React, { useState } from "react";
import Layout from "../layouts/Layout";
import styles from "./Auth.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4040/api/v1/auth/resetPassword",
        { token: token, Password: password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Smothing went wrong");
    }
  };

  return (
    <Layout title={"reset-Password"}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Reset Password</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              New Password
            </label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="Email"
              placeholder="Enter Your New Password"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
};

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (newPassword !== confirmPassword) {
//     setMessage("Passwords do not match.");
//     return;
//   }

//   try {
//     const response = await axios.post("/api/resetPassword", {
//       token: token,
//       newPassword: newPassword,
//     });

//     if (response.status === 200) {
//       setMessage("Password reset successfully.");
//     } else {
//       setMessage("Failed to reset password.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     setMessage("An error occurred.");
//   }
// };
