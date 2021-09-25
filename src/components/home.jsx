import React from "react";
import "../App.css"


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
                                <div >
                                    <figure  > 
                                        <img src={data.photo} alt="char"/>
                                        <figcaption>{data.name}</figcaption>
                                    </figure>

                                </div>
                                
                                
                            );
                            })


                        }
                    </div>
                        
                </div>
        )
    }
}