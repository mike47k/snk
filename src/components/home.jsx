import React from "react";
import Character from './character.jsx';
import {Link, } from 'react-router-dom';
import {Card, Container,Row} from 'react-bootstrap';
import '../App.css';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                <Container fluid> 
                    <Row className="mt-4 text-center" >
                    {this.props.chars.map((data) => {
                            return (
                                <Character data={data}/>
                                    
                            );
                            })


                        }
                    </Row>
                    
                   
                        
                </Container>
        )
    }
}