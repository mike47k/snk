import React from "react";
import "../App.css"
import Character from './character.jsx';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                <div className="Home-Div">
                    <div className="Home-Figure">
                    {this.props.chars.map((data, key) => {
                            return (
                                <Character data={data}/>
                            );
                            })


                        }
                    </div>
                        
                </div>
        )
    }
}