import React from "react";
import "../App.css"


export default class Character extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    

                <div >
                    <figure> 
                        <img src={this.props.data.photo} alt="char"/>
                        <figcaption>{this.props.data.name}</figcaption>
                    </figure>
                </div>                  
        )                        
    }
}