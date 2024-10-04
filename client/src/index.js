import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './pages/home';

const routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Home/>,
        errorElement : <Error/>
      }
    ]
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={routes}/>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
