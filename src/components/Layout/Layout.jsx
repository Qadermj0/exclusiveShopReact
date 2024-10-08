import React from 'react'
import Routers from '../../Routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from '../Header/Head'

const Layout = () => {


    return (

        < >
            <Head />
            <Header />

            <div>
                <Routers />
            </div>
            <Footer />
        </ >
    )
}

export default Layout