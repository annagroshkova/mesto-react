import Header from "./Header";
import {authApi} from "../utils/api";
import {Link, useNavigate} from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import {useState} from "react";

export default function Register() {
  const navigate = useNavigate()
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const cred = /** @type import("../types").Credentials */ Object.fromEntries(new FormData(form).entries())

    authApi.signup(cred)
      .then(() => {
        setSuccess(true)
        setTooltipOpen(true)
      })
      .catch(() => {
        setSuccess(false)
        setTooltipOpen(true)
      })
  }

  function handlePopupClose() {
    setTooltipOpen(false)
    if (success) {
      navigate('/sign-in')
    }
  }

  return (
    <div className="register">

      <Header linkUrl="/sign-in" linkText="Войти" />

      <div className="register__container">
        <h3 className="register__heading">Регистрация</h3>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}>
          <fieldset className="register__info">
            <input
              className="register__input register__input_type_email"
              type="email"
              name="email"
              placeholder="Email"

              defaultValue="anna.matvyeyenko@gmail.com"
              required
            />
            <input
              className="register__input register__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              defaultValue="12345678"
              required
            />
          </fieldset>
          <button className="register__submit-button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__undertext">Уже зарегистрированы? <Link className="register__login-link" to="/login">Войти</Link>
        </p>
      </div>

      <InfoTooltip isOpen={tooltipOpen} isSuccess={success} onClose={handlePopupClose} />
    </div>
  )
}