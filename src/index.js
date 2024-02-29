import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Link} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './pages/about/About';
import Nav from './components/ui/Nav';
import AboutPart02 from './pages/about/AboutPart02';
import Portfolio from './pages/portfolio/Portfolio';
import ScrollToTop from './func/ScrollToTop';
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "about",
    element: (
      <>
      <ScrollToTop/>
      <App />
      </>
    ),
  },
  {
    path: "portfolio",
    element: (
      <>
      <ScrollToTop/>
      <Nav/>
      <Portfolio/>
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
      <ScrollToTop/>
      <Nav/>
      <Contact/>
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
