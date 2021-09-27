import React, { useState , useEffect} from "react";
import '../App.css';
import {useParams} from 'react-router-dom';


export default function CharacterDetail (props){

    
    const [sel,setSel] =  useState("")

    const parametro = useParams();
    const[state, setState]= useState({
        id: props.chars[0].id,
        name: props.chars[0].name,
        lastname: props.chars[0].lastname,
        age: props.chars[0].age,
        photo: props.chars[0].photo,
        City: props.chars[0].City,
    })

    useEffect(() =>{
        console.log(typeof parametro.id);
        if (typeof parametro.id === "string") {
            handlePeriodChange(parseInt(parametro.id));
        }else{
            setSel( <div className= "select">
                        <select class="select-css" onChange={(val) => handlePeriodChange(val.target.value)}>
                            {props.chars.map((data, key) => {
                                    return (
                                        <option key={key} 
                                            value={data.id}>
                                            {data.name}
                                        </option>
                                    );
                                    })
                                }
                        </select>
                    </div>);
        }
    },[parametro])


    const handlePeriodChange = (selVal) => {
        setState(props.chars.find((element) => {
            return element.id == selVal;
        }) )
    }

        return (    
            
            <div>
                {sel}
               <p></p>
               <div class="container-card">
                <div class="card">
                <div class="card-top">
                    <h2 class="title">{state.name} {state.lastname}</h2>
                    <span class="subtitle">Edad: {state.age}</span>
                </div>
                
                <div class="media-card">
                    <img src={state.photo} alt="foto" />
                </div>
                <div class="bottom-card">
                    <span class="bottom-text">Ciudad: {state.City}</span>
                </div> 
                </div> 
                </div>
           </div>
        )
}