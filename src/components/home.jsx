import React from "react";
import "../App.css"


export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                <span className="Home-Div">
                        {this.props.chars.map((data, key) => {
                            return (
                                <span key={key}>
                                
                                <span className="Home-Figure"> 
                                    <img src={data.photo} alt="char"/>
                                    <figcaption>{data.name}</figcaption>
                                </span>
                                </span>
                            );
                            })


                        }
                </span>
        )
    }
}