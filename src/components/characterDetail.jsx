import React, { useState , useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Form,Row,Container,Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap';


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
            setSel( <Row className="mt-4 col-2 offset-4 text-center">
                        <Form.Select  onChange={(val) => handlePeriodChange(val.target.value)}>
                            {props.chars.map((data, key) => {
                                    return (
                                        <option key={key} 
                                            value={data.id}>
                                            {data.name}
                                        </option>
                                    );
                                    })
                                }
                        </Form.Select>
                    </Row>);
        }
    },[parametro])


    const handlePeriodChange = (selVal) => {
        setState(props.chars.find((element) => {
            return element.id == selVal;
        }) )
    }

        return (    
            
            <Container>
                {sel}
               
        


                <Row className="mt-4">
                        <Col className="col-4 offset-4">
                        <Card style={{ width: '18rem' }} >
                
                <Card.Body>
                    <Card.Title className="text-center">{state.name} {state.lastname}</Card.Title>
                    <Card.Img variant="top" src={state.photo}  />
                    <Card.Text>Edad: {state.age}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Ciudad: {state.City}</ListGroupItem>

                </ListGroup>
                </Card>
                        </Col>
                
                </Row>
                


           </Container>
        )
}