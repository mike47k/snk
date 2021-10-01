import "../App.css"
import {Link, NavLink} from 'react-router-dom';

export default function Character(props){
        return (    
            <div >
                <figure> 
                    <img src={props.data.photo} alt="char"/>
                    <Link to={`/charDetail/${props.data.id}`} ><figcaption>{props.data.name}</figcaption></Link>
                </figure>
            </div>                  
        )                        
}