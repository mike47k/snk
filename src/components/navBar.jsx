import React from "react";
import logo from './img/logo.png';
import '../App.css';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                <header>
                    <nav className="topnav">
                    <h1>SNK</h1>
                    <a href="#">Character Detail</a>
                    <a href="#">About</a>
                    </nav>
                </header>
        )
    }
}