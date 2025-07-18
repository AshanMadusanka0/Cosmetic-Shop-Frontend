export default function ProductCard(props){           //create the achchuwak //Function name 1st letter must be capital

    return(
        <div>
            <img src={props.src}></img>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <button>Add to Card</button>
        </div>
    )
}