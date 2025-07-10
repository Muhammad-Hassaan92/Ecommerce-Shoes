import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/inner/Footer'
import Products from './components/Products'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },    
    {
      path: "/About",
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path: "/Products",
      element: <><Navbar/><Products/><Footer/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/><Footer/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App