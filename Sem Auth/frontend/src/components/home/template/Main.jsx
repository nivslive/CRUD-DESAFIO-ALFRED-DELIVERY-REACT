import './Main.css'
import React from 'react'
import Header from './Header'
import Logo from '../../template/Logo'
import Nav from './Nav'
import Footer from './Footer'


export default props =>
 <div className="app main_grid">
     <Logo />
    <Nav />
    <Header {...props} />
    <main className="content container-fluid"> 
    <div className="p-3 mt-3">
        {props.children}
        </div> </main>
        <Footer />
</div> 


