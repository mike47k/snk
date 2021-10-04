import {Link} from 'react-router-dom';
import {Card, Col, Row} from 'react-bootstrap';

export default function Character(props){
        return (    
                <Col className="col-3"> 
                    <Card  style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={props.data.photo} />
                <Card.Body>
                <Link to={`/charDetail/${props.data.id}`} ><Card.Title>{props.data.name}</Card.Title></Link>
                  
                </Card.Body>
                </Card>
                </Col>
                
                
        )                        
}