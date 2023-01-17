import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App body">
      <Header />

      <Main />

      <Footer />


      <template id="card-container">
        <article className="element">
          <img className="element__image" src="src#" alt=""/>
          <button className="element__trash-icon" type="button" aria-label="Удалить"></button>
          <div className="element__info">
            <h2 className="element__text"></h2>
            <div className="element__likes">
              <button className="element__like-button" type="button" aria-label="Нравится"></button>
              <p className="element__likes-amount">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
