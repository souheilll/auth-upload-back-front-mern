import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function index({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default index