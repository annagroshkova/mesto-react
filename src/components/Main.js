import {useContext, useEffect, useState} from "react";
import {Card} from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/api";

function Main(props) {
  const currentUser = useContext(CurrentUserContext)

  const [cards, setCards] = useState(/** @type {import("../types").CardObject[]} */[])

  useEffect(() => {
    api.getInitialCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      <main className="main">
        <section className="profile">
          <div className="profile__image-container">
            <button
              className="profile__avatar-edit-button"
              type="button"
              onClick={props.onEditAvatar}
              aria-label="Сменить аватар"
            ></button>
            <img className="profile__avatar" src={currentUser.avatar} alt="аватар"/>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text">{currentUser.name}</h1>
              <button className="profile__edit-button"
                      type="button"
                      onClick={props.onEditProfile}
                      aria-label="Редактировать"></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button"
                  onClick={props.onAddPlace}
                  aria-label="Добавить"></button>
        </section>

        <section className="elements">
          {cards.map((card) =>
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          )}
        </section>
      </main>
    </div>
  );
}

export default Main;
