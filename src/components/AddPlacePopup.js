import PopupWithForm from "./PopupWithForm.js";
import {useState} from "react";

export default function AddPlacePopup(props) {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm name="add" title="Новое место" submitButtonTitle="Создать"
                   isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <input
          className="popup__input popup__input_type_place"
          type="text"
          name="name"
          placeholder="Название"
          defaultValue=""
          minLength="2"
          maxLength="40"
          required
          onChange={e => setName(e.target.value)}
        />
        <span className="popup__error place-name-error"></span>
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          required
          onChange={e => setLink(e.target.value)}
        />
        <span className="popup__error image-link-error"></span>
      </fieldset>
    </PopupWithForm>
  )
}
