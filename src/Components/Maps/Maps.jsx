import "./Maps.scss";

function Maps() {
  return (
    <>
      <section className="maps">
        <div className="container">
          <div className="maps__info">
            <h4 className="maps__heading">How it works</h4>

            <hr className="maps__hr" />
            <span className="maps__span"></span>
            <span className="maps__span2"></span>
            <span className="maps__span3"></span>

            <ul className="maps__list">
              <li className="maps__item">
                <h2 className="maps__nb">01</h2>
                <h4 className="maps__title">Pick your coffee</h4>
                <p className="maps__text">
                Select from our evolving range of artisan 
                coffees. Our beans are ethically sourced 
                and we pay fair prices for them. There are 
                new coffees in all profiles every month 
                for you to try out.</p>
              </li>

              <li className="maps__item">
              <h2 className="maps__nb">02</h2>
              <h4 className="maps__title">Choose the frequency</h4>
              <p className="maps__text">
              Customize your order frequency, 
              quantity, even your roast style and grind 
              type. Pause, skip or cancel your 
              subscription with no commitment 
              through our online portal.</p>
              </li>

              <li className="maps__item">
              <h2 className="maps__nb">03</h2>
              <h4 className="maps__title">Receive and enjoy!</h4>
              <p className="maps__text">
                We ship your package within 48 hours, 
              freshly roasted. Sit back and enjoy 
              award-winning world-class coffees 
              curated to provide a distinct tasting 
              experience.</p>
              </li>
            </ul>
            <button className="maps__btn">Create your plan</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maps;
