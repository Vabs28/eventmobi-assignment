import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './components/Error/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ViewGists from './pages/ViewGists/ViewGists';
import ViewForks from './pages/ViewForks/ViewForks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/users/:username/gists",
    element: <ViewGists />,
    errorElement: <Error />,
  },
  {
    path: "/users/:username/gists/:gistsid/forks",
    element: <ViewForks />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
