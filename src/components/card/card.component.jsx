import './card.styles.css';

const Card = ({monster}) => { 
    const { name, email, id } = monster;
    
        return (
            <div className="card-container" key={id}>
                        <img src={`https://robohash.org/${id}?set=set2&size=150x150`} alt={`${name}`} />
                        <h1>{name}</h1>
                        <p>{email}</p>
                    </div>
        )
}

export default Card;