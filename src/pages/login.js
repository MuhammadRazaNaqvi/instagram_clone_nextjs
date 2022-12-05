import React from "react";
import Head from "next/head";
import Link from "next/link";

import SignInForm from "src/components/Auth/SignInForm";


const login = () => {
  return (
    <>
      <Head>
        <title>Login • Instagram</title>
      </Head>

      <div>
        <div className="container">
          <div className="form-header">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="form-content">
            <SignInForm />
            <div className="or">
              <hr />
              <span>OR</span>
            </div>
            <button className="login-with-fb btn ">
              <img src="/images/icons/facebook-icon.svg" width="16px" />
              <span>Log in with Facebook</span>
            </button>
            <Link href="#">
              <a className="forgot-password">Forgot Pasword?</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
