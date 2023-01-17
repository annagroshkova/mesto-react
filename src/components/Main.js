function Main(props) {


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
            <img className="profile__avatar" src="src#" alt="аватар"/>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text"></h1>
              <button className="profile__edit-button"
                      type="button"
                      onClick={props.onEditProfile}
                      aria-label="Редактировать"></button>
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add-button" type="button"
                  onClick={props.onAddPlace}
                  aria-label="Добавить"></button>
        </section>

        <section className="elements"></section>
      </main>
    </div>
  );
}

export default Main;
