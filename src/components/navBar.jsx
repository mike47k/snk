import React from "react";
import logo from './img/logo.png';
import '../App.css';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                    <nav className="topnav">
                    
                    <h1><NavLink to="/" activeClassName="navLogo">SNK</NavLink></h1>
                    <NavLink to="/charDetail" >Character Detail</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    </nav>
        )
    }
}