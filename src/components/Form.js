import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <input type="text" id="reservation-name" placeholder="Name" />
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
        />
        <label htmlFor="reservation-email" className="visually-hidden">
          Email
        </label>
      </div>
      <div>
        <label htmlFor="reservation-date">Pick a date</label>
        <input type="date" id="reservation-date" />
      </div>
      <div>
        <label htmlFor="reservation-time">Pick a time</label>
        <input type="time" id="reservation-time" />
      </div>
      <button>Make Reservation</button>
    </form>
  );
};

export default Form;
