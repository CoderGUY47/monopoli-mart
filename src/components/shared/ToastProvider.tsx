"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-left"
      theme="dark"
      pauseOnHover
      icon={({ type }) => {
        switch (type) {
          case "success":
            return "🎉";
          case "error":
            return "❌";
          case "info":
            return "💡";
          case "warning":
            return "⚠️";
          default:
            return "🔔";
        }
      }}
    />
  );
}
