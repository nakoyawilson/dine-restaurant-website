import ButtonLink from "../components/ButtonLink";
import ResponsiveImage from "../components/ResponsiveImage";
import "./home.css";

// Imported Images
import enjoyablePlaceImgTablet from "../images/homepage/enjoyable-place-tablet.jpg";
import enjoyablePlaceImgDesktop from "../images/homepage/enjoyable-place-desktop.jpg";
import enjoyablePlaceImgMobile from "../images/homepage/enjoyable-place-mobile.jpg";
import locallySourcedImgMobile from "../images/homepage/locally-sourced-mobile.jpg";
import locallySourcedImgTablet from "../images/homepage/locally-sourced-tablet.jpg";
import locallySourcedImgDesktop from "../images/homepage/locally-sourced-desktop.jpg";
import salmonImgMobile from "../images/homepage/salmon-mobile.jpg";
import salmonImgDesktopTablet from "../images/homepage/salmon-desktop-tablet.jpg";
import beefImgMobile from "../images/homepage/beef-mobile.jpg";
import beefImgDesktopTablet from "../images/homepage/beef-desktop-tablet.jpg";
import chocolateImgMobile from "../images/homepage/chocolate-mobile.jpg";
import chocolateImgDesktopTablet from "../images/homepage/chocolate-desktop-tablet.jpg";
import familyGatheringImgMobile from "../images/homepage/family-gathering-mobile.jpg";
import familyGatheringImgTablet from "../images/homepage/family-gathering-tablet.jpg";
import familyGatheringImgDesktop from "../images/homepage/family-gathering-desktop.jpg";
import specialEventsImgMobile from "../images/homepage/special-events-mobile.jpg";
import specialEventsImgTablet from "../images/homepage/special-events-tablet.jpg";
import specialEventsImgDesktop from "../images/homepage/special-events-desktop.jpg";
import socialEventsImgMobile from "../images/homepage/social-events-mobile.jpg";
import socialEventsImgTablet from "../images/homepage/social-events-tablet.jpg";
import socialEventsImgDesktop from "../images/homepage/social-events-desktop.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="main-heading">Exquisite dining since 1989</h1>
        <p className="paragraph">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <ButtonLink
          textContent="Book a table"
          route="/booking"
          linkClasses="cta-button"
        />
      </section>
      <section className="about">
        <ResponsiveImage
          mobileImg={enjoyablePlaceImgMobile}
          tabletImg={enjoyablePlaceImgTablet}
          desktopImg={enjoyablePlaceImgDesktop}
          imgDescription=""
          imgClasses="about-image"
        />
        <h2 className="subheading">Enjoyable place for all the family</h2>
        <p className="paragraph">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
        <ResponsiveImage
          mobileImg={locallySourcedImgMobile}
          tabletImg={locallySourcedImgTablet}
          desktopImg={locallySourcedImgDesktop}
          imgDescription=""
          imgClasses="about-image"
        />
        <h2 className="subheading">The most locally sourced food</h2>
        <p className="paragraph">
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </section>
      <section className="menu">
        <h2 className="subheading">A few highlights from our menu</h2>
        <p className="paragraph">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
        <ResponsiveImage
          mobileImg={salmonImgMobile}
          tabletImg={salmonImgDesktopTablet}
          desktopImg={salmonImgDesktopTablet}
          imgDescription=""
          imgClasses="menu-image"
        />
        <h3 className="menu-item-name">Seared Salmon Fillet</h3>
        <p className="menu-item-description">
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </p>
        <ResponsiveImage
          mobileImg={beefImgMobile}
          tabletImg={beefImgDesktopTablet}
          desktopImg={beefImgDesktopTablet}
          imgDescription=""
          imgClasses="menu-image"
        />
        <h3 className="menu-item-name">Rosemary Filet Mignon</h3>
        <p className="menu-item-description">
          Our prime beef served to your taste with a delicious choice of
          seasonal sides.
        </p>
        <ResponsiveImage
          mobileImg={chocolateImgMobile}
          tabletImg={chocolateImgDesktopTablet}
          desktopImg={chocolateImgDesktopTablet}
          imgDescription=""
          imgClasses="menu-image"
        />
        <h3 className="menu-item-name">Summer Fruit Chocolate Mousse</h3>
        <p className="menu-item-description">
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </section>
      <section className="events">
        <div className="image-container">
          <ResponsiveImage
            mobileImg={familyGatheringImgMobile}
            tabletImg={familyGatheringImgTablet}
            desktopImg={familyGatheringImgDesktop}
            imgDescription=""
            imgClasses="event-image active"
          />
          <ResponsiveImage
            mobileImg={specialEventsImgMobile}
            tabletImg={specialEventsImgTablet}
            desktopImg={specialEventsImgDesktop}
            imgDescription=""
            imgClasses="event-image"
          />
          <ResponsiveImage
            mobileImg={socialEventsImgMobile}
            tabletImg={socialEventsImgTablet}
            desktopImg={socialEventsImgDesktop}
            imgDescription=""
            imgClasses="event-image"
          />
        </div>
        <button className="event-option active">Family Gathering</button>
        <button className="event-option">Special Events</button>
        <button className="event-option">Social Events</button>
        <section className="event-description active">
          <h2 className="subheading">Family Gathering</h2>
          <p className="paragraph">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
        </section>
        <section className="event-description">
          <h2 className="subheading">Special Events</h2>
          <p className="paragraph">
            Whether it’s a romantic dinner or special date you’re celebrating
            with others we’ll look after you. We’ll be sure to mark your special
            date with an unforgettable meal.
          </p>
        </section>
        <section className="event-description">
          <h2 className="subheading">Social Events</h2>
          <p className="paragraph">
            Are you looking to have a larger social event? No problem! We’re
            more than happy to cater for big parties. We’ll work with you to
            make your event a hit with everyone.
          </p>
        </section>
        <ButtonLink
          textContent="Book a table"
          route="/booking"
          linkClasses="cta-button"
        />
      </section>
      <section className="cta">
        <h2 className="subheading">Ready to make a reservation?</h2>
        <ButtonLink
          textContent="Book a table"
          route="/booking"
          linkClasses="cta-button"
        />
      </section>
    </>
  );
};

export default Home;
