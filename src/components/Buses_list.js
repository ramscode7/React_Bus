import { useState } from "react";
import "./Buses_list.css";
import Getdetails from "./Get_details";

function Hyderabad(props) {
  const [book_tickets, setbook_tickets] = useState(false);
  const [currentbusprice, setcurrentbusprice] = useState("");

  const bookinghandler = (event) => {
    setbook_tickets(true);
    setcurrentbusprice(event);
  };

  return (
    <>
      {props.busdata.map((event) => (
        <center
          key={event.bus_no}
          onClick={() => {
            bookinghandler(event.price);
          }}
        >
          <div className="hyd" key={event.bus_no}>
            <div className="section_1">
              <p>{event.departure_time}</p>||<p>{event.arrival_time}</p>
            </div>

            <div className="section_2">
              <p>
                {event.journey_time}&nbsp;
                <span className="seats">
                  ({event.no_of_seats}&nbsp;Available)
                </span>
              </p>
              <p>{event.type}</p>
              <p>{event.travells}</p>
            </div>

            <div className="section_3">
              <h3>&#8377; {event.price}/-</h3>
              <br />
              <p className="section_3rating">&#9733; {event.rating}</p>
              <p className="section_3reviews">({event.reviews} reviews)</p>
            </div>
          </div>
        </center>
      ))}
      <Getdetails
        For_Booking={book_tickets}
        onclose={() => {
          setbook_tickets(false);
        }}
        items={currentbusprice}
      ></Getdetails>
    </>
  );
}

export default Hyderabad;
