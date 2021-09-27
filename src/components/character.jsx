import "../App.css"

export default function Character(props){
        return (    
            <div >
                <figure> 
                    <img src={props.data.photo} alt="char"/>
                    <figcaption>{props.data.name}</figcaption>
                </figure>
            </div>                  
        )                        
}