import Card from "../card/card.component";
import './card-list.styles.css'

// Destructure out monster props
const CardList = ({ monsters }) => {
    (
        <div className="card-list">
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} />
                )})}
        </div>
    )
}

export default CardList;