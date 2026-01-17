import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'

const Root = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>
            </div>
            <section>
                <Outlet></Outlet>

            </section>
             
             <section>
                <Footer></Footer>
             </section>
        </div>


    )
}

export default Root