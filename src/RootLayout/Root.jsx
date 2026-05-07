import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'

const Root = () => {
    return (
        <div>
            <div className="">
                <Navbar />
            </div>
            <section>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Root