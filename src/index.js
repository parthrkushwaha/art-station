import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<Auth0Provider
    domain="dev-gkoazg6s1ig2h8em.us.auth0.com"
    clientId="KTUTBGzOWN0ezY4U5Wzn5KJgsmbVdB6I"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<App />
</Auth0Provider>

);

