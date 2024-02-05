import "./Cofe.scss";
import Qahva from "../img/coffee-bean.png";
import Gift from "../img/Combined Shape.png";
import Delivery from "../img/Combined Shape (1).png";


function Cofe() {
  return (
    <>
      <section className="cofe">
        <div className="container">
          <div className="cofe__info">
            <h3 className="cofe__heading">Why choose us?</h3>
            <p className="cofe__textbek">
              A large part of our role is choosing which particular coffees will be featured
              in our range. This means working closely with the best coffee growers to give
              you a more impactful experience on every level.
            </p>
          </div>
          <ul className="cofe__list">
            <li className="cofe__item">
              <img className="cofe__img" src={Qahva} alt="icon" />
              <h4 className="cofe__title">Best quality</h4>
              <p className="cofe__text">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </li>

            <li className="cofe__item">
              <img className="cofe__img" src={Gift} alt="icon" />
              <h4 className="cofe__title">Exclusive benefits</h4>
              <p className="cofe__text">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
            </li>

            <li className="cofe__item">
              <img className="cofe__img" src={Delivery} alt="icon" />
              <h4 className="cofe__title">Free shipping</h4>
              <p className="cofe__text">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
            </li>
          </ul>

        </div>
      </section>
    </>
  );
}

export default Cofe;
