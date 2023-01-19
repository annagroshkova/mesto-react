import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState()

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setConfirmPopupOpen(false)
    setSelectedCard(undefined)
  }

  return (
    <div className="App body">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
      />

      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" submitButtonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__info">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            defaultValue=""
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
            defaultValue=""
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error about-error"></span>
        </fieldset>

      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" submitButtonTitle="Создать"
        isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__info">
          <input
            className="popup__input popup__input_type_place"
            type="text"
            id="place-name"
            name="place-name"
            placeholder="Название"
            defaultValue=""
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
            defaultValue=""
            required
          />
          <span className="popup__error image-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Обновить аватар"
                     submitButtonTitle="Создать"
                     isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__info">
          <input
            className="popup__input popup__input_type_avatar"
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            defaultValue=""
            required
          />
          <span className="popup__error avatar-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" submitButtonTitle="Да"
                     isOpen={isConfirmPopupOpen} onClose={closeAllPopups}/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
