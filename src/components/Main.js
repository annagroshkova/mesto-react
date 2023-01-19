import {useEffect, useState} from "react";
import {api} from "../utils/api";
import {Card} from "./Card";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState(/** @type {import("../types").CardObject[]} */[])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards)
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
            <img className="profile__avatar" src={userAvatar} alt="аватар"/>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text">{userName}</h1>
              <button className="profile__edit-button"
                      type="button"
                      onClick={props.onEditProfile}
                      aria-label="Редактировать"></button>
            </div>
            <p className="profile__description">{userDescription}</p>
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
