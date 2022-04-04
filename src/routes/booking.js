import { useOutletContext } from "react-router-dom";
import Form from "../components/Form";
import "./booking.css";

const Booking = () => {
  const [reservationCount, setReservationCount, increaseCount, decreaseCount] =
    useOutletContext();
  return (
    <>
      <h1 className="main-heading">Reservations</h1>
      <p className="paragraph">
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </p>
      <Form
        reservationCount={reservationCount}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </>
  );
};

export default Booking;
