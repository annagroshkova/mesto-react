import PopupWithForm from "./PopupWithForm.js";
import {useRef,} from "react";

export default function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleUpdateAvatar(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар"
                   submitButtonTitle="Создать"
                   isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleUpdateAvatar}>
      <fieldset className="popup__info">
        <input
          ref={avatarRef}
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
  )
}

