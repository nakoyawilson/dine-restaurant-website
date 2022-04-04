import minusIcon from "../images/icons/icon-minus.svg";
import plusIcon from "../images/icons/icon-plus.svg";
import "./Form.css";

const Form = ({ reservationCount, increaseCount, decreaseCount }) => {
  return (
    <form className="form">
      <div>
        <input
          type="text"
          id="reservation-name"
          placeholder="Name"
          className="form-input"
        />
        <label htmlFor="reservation-name" className="visually-hidden">
          Name
        </label>
      </div>
      <div>
        <input
          type="email"
          name=""
          id="reservation-email"
          placeholder="Email"
          className="form-input"
        />
        <label htmlFor="reservation-email" className="visually-hidden">
          Email
        </label>
      </div>
      <div>
        <label htmlFor="reservation-date" className="input-label">
          Pick a date
        </label>
        <input type="date" id="reservation-date" />
      </div>
      <div>
        <label htmlFor="reservation-time" className="input-label">
          Pick a time
        </label>
        <input type="time" id="reservation-time" />
      </div>
      <div className="counter-container">
        <button
          type="button"
          className="counter-button"
          onClick={decreaseCount}
        >
          <span className="visually-hidden">Decrease</span>
          <img src={minusIcon} alt="" />
        </button>
        <span className="reservation-count">
          {reservationCount} {reservationCount === 1 ? "person" : "people"}
        </span>
        <button
          type="button"
          className="counter-button"
          onClick={increaseCount}
        >
          <span className="visually-hidden">Increase</span>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <button className="form-submit">Make Reservation</button>
    </form>
  );
};

export default Form;
