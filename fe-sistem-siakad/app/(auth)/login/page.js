"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "/styles/gradient.css"; // If you have this, otherwise remove this import
import ToastNotifier from "/app/components/toastNotifier";

const URL = process.env.NEXT_PUBLIC_URL;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toastRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${URL}/login`, { email, password });

      Cookies.set("token", res.data.token);
      Cookies.set("username", res.data.username);
      Cookies.set("role", res.data.role, { expires: 1 });
      Cookies.set("profile", res.data.profile, { expires: 1 });
      Cookies.set("unitKerja", res.data.unitKerja, { expires: 1 });

      if (toastRef.current) {
        toastRef.current.showToast("00", "Login berhasil!");
      }

      setTimeout(() => {
        switch (res.data.role) {
          case "siswa":
            router.push("/dashboard_siswa");
            break;
          default:
            router.push("/");
        }
      }, 400);
    } catch (err) {
      if (toastRef.current) {
        toastRef.current.showToast(
          "01",
          "Login gagal. Email atau password salah."
        );
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <ToastNotifier ref={toastRef} />

      <div className="login-card">
        <h3 className="app-name">{process.env.NEXT_PUBLIC_APP_NAME || "SIAKAD"}</h3>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="submit-btn">
            <Button type="submit" label="Login" />
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Import Poppins font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        /* Styling for login page */
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #fff; /* Background putih */
          font-family: 'Poppins', sans-serif;
        }

        /* Card style for the login form */
        .login-card {
          background-color: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          text-align: center;
        }

        /* App name (header) */
        .app-name {
          font-size: 2.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 30px;
          letter-spacing: 1px;
        }

        /* Form container */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* Input field style */
        .input-field {
          margin-bottom: 20px;
        }

        .input-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 1.1rem;
          color: #555;
        }

        .input-field input {
          width: 100%;
          padding: 14px;
          font-size: 1.1rem;
          border-radius: 8px;
          border: 1px solid #ddd;
          box-sizing: border-box;
          outline: none;
        }

        .input-field input:focus {
          border-color: #2575fc;
        }

        /* Button style */
        .submit-btn button {
          width: 100%;
          padding: 14px;
          background-color: #2575fc;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .submit-btn button:hover {
          background-color: #6a11cb;
        }

        /* Add some subtle hover effects */
        .submit-btn button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
