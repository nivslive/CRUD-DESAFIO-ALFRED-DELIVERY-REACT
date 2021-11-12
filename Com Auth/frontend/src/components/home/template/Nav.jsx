import './Nav.css'
import React, { Component } from 'react'
import NavItem from './NavItem'
import Logout from './LogoutButton';

const navHomeProps = {link: 'home', icon: 'home', name: 'home'}
const navUserProps = {link: 'users', icon: 'plus-square', name: 'Afazeres'}
const navLogoutProps = {link: 'login', icon: 'sign-out', name: 'Deslogar'}



export default class props extends Component {


render () {return (<aside className="menu-area">
 <nav className="menu">
    <NavItem {...navHomeProps}/>
    <NavItem {...navUserProps}/>
    <Logout {...navLogoutProps}/> 
   

 </nav>

</aside>)}}
