"use client";

import { ToastContainer } from "react-toastify";

/**
 * Mounted once at the root. The visual theme is overridden in globals.css
 * so the notifications match the rest of the palette.
 */
export default function Toaster() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      theme="dark"
      toastClassName="!rounded-none"
    />
  );
}
