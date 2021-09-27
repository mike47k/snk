import React from "react";
import "../App.css"
import Character from './character.jsx';
import {Link, NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                <div className="Home-Div">
                    <div className="Home-Figure">
                    {this.props.chars.map((data) => {
                            return (
                                <Link to={`/charDetail/${data.id}`} ><Character data={data}/></Link>
                                    
                            );
                            })


                        }
                    </div>
                        
                </div>
        )
    }
}