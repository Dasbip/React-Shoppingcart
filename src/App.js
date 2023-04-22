import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { Shop } from './components/Shoppingcart';
// import {Shop} from './components/shop/shop'
// import {Header} from './components/Header/header';
import {Carrt} from './components/shop/carts';
import { Fakeapp, Fakeapp2 } from './components/practicememo/useindex';
import { Reducer } from './components/practicememo/reducer';

function App() {
  function getdata(data){

console.log(data);
  }

  return (
    <div className="App">
      <div>
        <div>
          <h1>Blipkart</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout2 />}>              
                {/* <Route path="Cart" element={<Carrt />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        {/* <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p> */}

        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Carrt cartdata = {getdata} />} />
              <Route path="dashboard" element={<Shop  />} />

              {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
              <Route path="*" element={<Fakeapp />} />
              <Route path="" element={<Fakeapp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Header /> */}
      {/* <Shop /> */}
      {/* <Fakeapp/> */}
      {/* <Fakeapp2 />
      <Reducer/> */}
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          {/* <li>
            <Link to="/cart">Cart</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Layout2() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          
          <li>
            <Link to="/Carrt">Cart</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      {/* <Outlet /> */}
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}



export default App();
