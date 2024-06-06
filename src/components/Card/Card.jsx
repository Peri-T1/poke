import "./Card.css"


const Card = (props) => {

const {children, name} = props



    return(
    
        <a href={name}>
    <div className='cardWrapper'>
    <p className='cardTitle'>{children}</p>
    </div>s
    </a>  
    
    )
}

export default Card;
