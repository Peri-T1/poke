import "./Card.css"
import { useNavigate } from "react-router-dom"

const Card = (props) => {

    const navigate = useNavigate()

const {children, name} = props
    return(
    
        // <a href={name}>
    <div className='cardWrapper' onClick={() => navigate(`pokemon/${name}`)}>
    <p className='cardTitle'>{children}</p>
    </div>
    // </a>  
    
    )
}

export default Card;
