export default function PopupWithImage() {
  return (
    <div className="popup popup_image-preview">
      <div className="popup__image-container">
        <div className="popup__inner-container">
          <img className="popup__image" src="#" alt=""/>
          <p className="popup__undertext"></p>
        </div>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  )
}
