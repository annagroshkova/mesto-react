import PopupWithForm from "./PopupWithForm";

function Main() {
  function handleEditAvatarClick() {
    const editAvatarPopupElement = document.querySelector('.popup_edit-avatar')
    editAvatarPopupElement.classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    const editProfileElement = document.querySelector('.popup_edit')
    editProfileElement.classList.add('popup_opened')
  }

  function handleAddPlaceClick() {
    const addPlaceElement = document.querySelector('.popup_add')
    addPlaceElement.classList.add('popup_opened')
  }

  return (
    <div>
      <main className="main">
        <section className="profile">
          <div className="profile__image-container">
            <button
              className="profile__avatar-edit-button"
              type="button"
              onClick={handleEditAvatarClick}
              aria-label="Сменить аватар"
            ></button>
            <img className="profile__avatar" src="src#" alt="аватар"/>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-text"></h1>
              <button className="profile__edit-button"
                      type="button"
                      onClick={handleEditProfileClick}
                      aria-label="Редактировать"></button>
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add-button" type="button"
                  onClick={handleAddPlaceClick}
                  aria-label="Добавить"></button>
        </section>

        <section className="elements"></section>

        <PopupWithForm name="edit" title="Редактировать профиль" submitButtonTitle="Сохранить">
          <fieldset className="popup__info">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              value=""
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error name-error"></span>
            <input
              className="popup__input popup__input_type_description"
              type="text"
              id="about"
              name="about"
              placeholder="О себе"
              value=""
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error about-error"></span>
          </fieldset>

        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" submitButtonTitle="Создать">
          <fieldset className="popup__info">
            <input
              className="popup__input popup__input_type_place"
              type="text"
              id="place-name"
              name="place-name"
              placeholder="Название"
              value=""
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error place-name-error"></span>
            <input
              className="popup__input popup__input_type_link"
              type="url"
              id="image-link"
              name="image-link"
              placeholder="Ссылка на картинку"
              value=""
              required
            />
            <span className="popup__error image-link-error"></span>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="edit-avatar" title="Обновить аватар"
                       submitButtonTitle="Создать">
          <fieldset className="popup__info">
            <input
              className="popup__input popup__input_type_avatar"
              type="url"
              id="avatar"
              name="avatar"
              placeholder="Ссылка на картинку"
              value=""
              required
            />
            <span className="popup__error avatar-error"></span>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?" submitButtonTitle="Да"/>

        <div className="popup popup_image-preview">
          <div className="popup__image-container">
            <div className="popup__inner-container">
              <img className="popup__image" src="src#" alt=""/>
              <p className="popup__undertext"></p>
            </div>
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Main;
