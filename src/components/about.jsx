import {Form,Row,Container,Button,Alert} from 'react-bootstrap'
import {useState} from 'react';
export function validacion(input){
        let errors = {}
        if(!input.correo){
            errors.correo = "Correo es Requerido"
        } else if(!/\S+@\S+\.\S+/.test(input.correo)){
            errors.correo = "Correo debe ser un email"
        }
        if(!input.asunto){
                errors.asunto = "Asunto es Requerido"
        } else if(input.asunto.length < 10){
        errors.asunto = "El Asunto debe tener minimo 10 letras"
        }
        if(!input.mensaje){
        errors.mensaje = "Mensaje es Requerido"
        } else if(input.mensaje.length > 256){
        errors.mensaje = "El Mensaje debe tener un maximo de 256 letras"
        }
        return errors;
}


export default function Footer(){

        const [state, setState] = useState({
                correo: '',
                asunto: '',
                mensaje: ''
            })
        
            const [fails, setFails] = useState({
                    correo: 'Correo es Requerido',
                    asunto: "Asunto es Requerido",
                    mensaje: "Mensaje es Requerido"
            })

            function onSubmitForm(e){
                e.preventDefault();
                alert(`el usuario es ${state.username} y las password es ${state.password}`)
        }
    
        function onHandleChange(e){
                setState({
                    ...state,
                    [e.target.name]: e.target.value
                })
                
                setFails(
                    validacion({
                        ...state, 
                        [e.target.name]: e.target.value
                        })
                    )
    
        }

        return (    
                <Container>
                        <Row >
                                <h2 className="text-center mt-4 mb-4">Cristian Orlando Michel</h2>
                        </Row>
                        <Row>
                                <Form className="col-8 offset-2">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo electronico</Form.Label>
                                        <Form.Control type="email" name="correo" placeholder="Ingrese su correo" 
                                        value={state.correo}
                                        onChange={(e) => onHandleChange(e)}/>
                                        </Form.Group>
                                        {fails.correo && <Alert variant="danger"> {fails.correo} </Alert>}

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Asunto</Form.Label>
                                        <Form.Control type="text" name="asunto" 
                                        placeholder="Ingrese un asunto" value={state.asunto}
                                        onChange={(e) => onHandleChange(e)} />
                                        </Form.Group>
                                        {fails.asunto && <Alert variant="danger"> {fails.asunto} </Alert>}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Mensaje</Form.Label>
                                                <Form.Control as="textarea" name="mensaje" rows={3} 
                                                value={state.mensaje}
                                                onChange={(e) => onHandleChange(e)}/>
                                        </Form.Group>
                                        {fails.mensaje && <Alert variant="danger"> {fails.mensaje} </Alert>}
                                        
                                        
                                        <Button variant="primary" type="submit"
                                        disabled={ fails.correo || fails.asunto || fails.mensaje? true : false  }>
                                        Enviar
                                        </Button>                                        
                                </Form>


                        </Row>
                </Container>
                
                       
               
        )
}