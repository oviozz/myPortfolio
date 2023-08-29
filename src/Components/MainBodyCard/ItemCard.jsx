
import "./ItemCard.css";

function ItemCard({ cardImg, cardTitle, cardDetail, hrefLink }) {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${cardImg})`
    };

    return (
        <a target="_blank" rel="noopener noreferrer" href={hrefLink} className="item--container">
            <div style={containerStyle} className="item--image" />
            <h1 className="item--title">{cardTitle}</h1>
            <div className="item--info">
                <div className="item--descri">{cardDetail}</div>
            </div>
        </a>
    );
}

export default ItemCard;
