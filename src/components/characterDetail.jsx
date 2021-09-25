import React from "react";
import '../App.css';

export default class CharacterDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: this.props.chars[0].name,
            apellido: this.props.chars[0].lastname,
            edad: this.props.chars[0].age,
            foto: this.props.chars[0].photo,
            ciudad: this.props.chars[0].City,
        }
    }
    handlePeriodChange(selVal) {
        let ch = this.props.chars.forEach(element => {
            if (element.name === selVal) {
                this.setState({
                    nombre: element.name,
                    apellido: element.lastname,
                    edad: element.age,
                    foto: element.photo,
                    ciudad: element.City,
                })
            }
        });
        console.log(ch);
       
    }

    render(){
        return (    
            <div>
                <div className= "select">

               <select class="select-css" onChange={(val) => this.handlePeriodChange(val.target.value)}>
                  {this.props.chars.map((data, key) => {
                            return (
                                <option key={key} 
                                    value={data.name}>
                                    {data.name}
                                </option>
                            );
                            })


                        }
               </select>
                </div>
               <p></p>
               <div class="container-card">
                <div class="card">
                <div class="card-top">
                    <h2 class="title">{this.state.nombre} {this.state.apellido}</h2>
                    <span class="subtitle">Edad: {this.state.edad}</span>
                </div>
                
                <div class="media-card">
                    <img src={this.state.foto} alt="foto" />
                </div>
                <div class="bottom-card">
                    <span class="bottom-text">Ciudad: {this.state.ciudad}</span>
                </div> 
                </div> 
                </div>
           </div>
        )
    }
}