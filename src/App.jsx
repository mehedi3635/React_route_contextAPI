import { useState } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, } from "react-router-dom";

import './App.css'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import About from './componets/About'
import Contact from './componets/Contact'
import PageNotFound from './componets/PageNotFound'
import { RouterProvider } from 'react-router-dom'
import { UserContext } from './contexts/UserContex'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /> <Home /> </>
  },
  {
    path: "/about",
    element: <> <Navbar /><About /> </>
  },
  {
    path: "/contact",
    element: <> <Navbar /><Contact /> </>
  },

  {
    path: "*",
    element: <PageNotFound />
  }
]);
const user = {
  name: "John Doe",
  email: "john.doe@example.com"
};

function App() {


  return (

    <>
      <UserContext.Provider value={user}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>


  )
}

export default App;
