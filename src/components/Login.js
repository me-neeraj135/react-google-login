/** @format */

import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "@leecheuk/react-google-login";
function Login() {
  const clientId =
    "161004755069-1k68up47gc2lia3t4m70ode220ue5imt.apps.googleusercontent.com";

  const [showLogin, setLogin] = useState(true);
  const [showLogout, setLogout] = useState(false);

  const handleLoginSuccess = res => {
    setLogin(false);
    setLogout(true);
    console.log(res, `login-success`);
  };

  const handleLoginFailure = res => {
    console.log(res, `login-fail`);
  };

  const handleLogoutSuccess = res => {
    setLogin(true);
    setLogout(false);
    console.log(res, `log--out-success`);
  };

  return (
    <div>
      {showLogin ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}

      {showLogout ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={handleLogoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}

export default Login;
