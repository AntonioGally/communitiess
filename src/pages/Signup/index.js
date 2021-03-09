import React from "react";
import App from "./App.js";
import SignupProvider from "../../context/Signup.js";

export default function Signup() {
  return (
    <>
      <SignupProvider>
        <App />
      </SignupProvider>
    </>
  );
}
