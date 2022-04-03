import ButtonLink from "../components/ButtonLink";
import "./home.css";

const Home = () => {
  return (
    <>
      <h1>Exquisite dining since 1989</h1>
      <p>
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <ButtonLink textContent="Book a table" route="/booking" linkClasses="" />
      <h2>Enjoyable place for all the family</h2>
      <p>
        Our relaxed surroundings make dining with us a great experience for
        everyone. We can even arrange a tour of the farm before your meal.
      </p>
      <h2>The most locally sourced food</h2>
      <p>
        All our ingredients come directly from our farm or local fishery. So you
        can be sure that you’re eating the freshest, most sustainable food.
      </p>
      <section>
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
        <h3>Seared Salmon Fillet</h3>
        <p>
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </p>
        <h3>Rosemary Filet Mignon</h3>
        <p>
          Our prime beef served to your taste with a delicious choice of
          seasonal sides.
        </p>
        <h3>Summer Fruit Chocolate Mousse</h3>
        <p>
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </section>
      <button>Family Gathering</button>
      <button>Special Events</button>
      <button>Social Events</button>
      <section>
        <h2>Family Gathering</h2>
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
      </section>
      <section>
        <h2>Special Events</h2>
        <p>
          Whether it’s a romantic dinner or special date you’re celebrating with
          others we’ll look after you. We’ll be sure to mark your special date
          with an unforgettable meal.
        </p>
      </section>
      <section>
        <h2>Social Events</h2>
        <p>
          Are you looking to have a larger social event? No problem! We’re more
          than happy to cater for big parties. We’ll work with you to make your
          event a hit with everyone.
        </p>
      </section>
      <ButtonLink textContent="Book a table" route="/booking" linkClasses="" />
      <section className="cta">
        <h2>Ready to make a reservation?</h2>
        <ButtonLink
          textContent="Book a table"
          route="/booking"
          linkClasses=""
        />
      </section>
    </>
  );
};

export default Home;
