export function Card(props) {
  const card = /** @type {import("../types").CardObject} */ props.card

  return(
    <article className="element" key={card._id}>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <button className="element__trash-icon" type="button" aria-label="Удалить"></button>
      <div className="element__info">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__likes">
          <button className="element__like-button" type="button" aria-label="Нравится"></button>
          <p className="element__likes-amount">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )

  function handleCardClick () {
    props.onCardClick(card)
  }
}
