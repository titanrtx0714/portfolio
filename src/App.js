import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { Helmet } from "react-helmet"
import AOS from "aos"

import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta
            name="description"
            content="Michael Lai - Software Developer."
          />
          <meta name="author" content="Michael Lai" />
          <title>Michael Lai - Portfolio</title>
        </Helmet>
        <div id="wrapper">
          <Navbar />
          <Home />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Route>
    </Switch>
  )
}

export default App
