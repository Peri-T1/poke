import "./Card.css"
import { useNavigate } from "react-router-dom"

const Card = (props) => {

    const navigate = useNavigate()

const {children, name} = props
    return(
    <>
        {/* <a href={name}> */}
    <div className='cardWrapper' onClick={() => navigate(`pokemon/${name}`)}>
   
    </div>
     <p className='cardTitle' onClick={() => navigate(`pokemon/${name}`)}>{children}</p>
     {/* </a>   */}
    </>
    )
}

export default Card;
