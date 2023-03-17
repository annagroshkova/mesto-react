import {authApi} from "../utils/api";
import Header from "./Header";

export default function Login() {
  function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const cred = /** @type import("../types").Credentials */ Object.fromEntries(new FormData(form).entries())
    console.log(cred)

    authApi.signin(cred).then(res => {
      console.log(res)
      alert('it works!')
    })
  }

  return (
    <div className="register">

      <Header linkUrl="/" linkText="Home" />

      <div className="register__container">
        <h3 className="register__heading">Вход</h3>
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
          <button className="register__submit-button" type="submit">Enter</button>
        </form>
        <p className="register__undertext"></p>
      </div>
    </div>
  )
}
