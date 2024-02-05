import "./Our.scss";
import Esspresso from "../img/kopi1 copy.png";
import Planalto from "../img/kopi2.png";
import Piccollo from "../img/kopi3.png";
import Danche from "../img/kopi4.png";



function Our() {
  return (
    <>
      <section className="our">
        <div className="container">
          <ul  className="our__list">
            <li className="our__item">
              <img src={Esspresso} alt="qahva"/>
              <h4 className="our__title">Gran Espresso</h4>
              <p className="our__text">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
            </li>

            <li className="our__item">
              <img src={Planalto} alt="qahva"/>
              <h4 className="our__title">Planalto</h4>
              <p className="our__text">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
            </li>

            <li className="our__item">
              <img src={Piccollo} alt="qahva"/>
              <h4 className="our__title">Piccollo</h4>
              <p className="our__text">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
            </li>

            <li className="our__item">
              <img src={Danche} alt="qahva"/>
              <h4 className="our__title">Danche</h4>
              <p className="our__text">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}


export default Our;