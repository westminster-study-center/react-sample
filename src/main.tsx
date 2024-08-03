import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// eslint-disable-next-line
import SignupForm from './SignupForm';
import Form from './components/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SignupForm",
    element: <SignupForm />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
