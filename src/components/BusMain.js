import "./BusMain.css";
import Hyderabad from "./Buses_list";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [from_value, setfrom_value] = useState("");
  const [to_value, setto_value] = useState("");
  const [showbuses, setshowbuses] = useState(undefined);

  const buses_data = [
    {
      bus_no: "Ap1235",
      departure: "HYDERABAD",
      destination: "VIJAYAWADA",
      departure_time: `16:30 PM`,
      arrival_time: "23:00 PM",
      journey_time: "6:30 Hours",
      travells: "🚌 Morning Star Travels",
      price: 650,
      type: "Non A/C-Seater",
      rating: "4.0",
      reviews: "5127 🙋‍♂️",
      no_of_seats: "11 Seats",
    },
    {
      bus_no: "Ap035",
      departure: "HYDERABAD",
      destination: "VIJAYAWADA",
      departure_time: `16:00 PM`,
      arrival_time: "23:00 PM",
      journey_time: "6:00 Hours",
      travells: "🚌 Morning Star Travels",
      price: 750,
      type: "A/C-Seater (2+1)",
      rating: "4.1",
      reviews: "2027 🙋‍♂️",
      no_of_seats: "9 Seats",
    },
    {
      bus_no: "Ap1805",
      departure: "HYDERABAD",
      destination: "VIJAYAWADA",
      departure_time: `16:00 PM`,
      arrival_time: "23:00 PM",
      travells: "🚍 TDP Travels",
      price: 700,
      type: "A/C Sleeper (2+1)",
      journey_time: "6:00 Hours",
      rating: "4.5",
      reviews: "3012 🙋‍♂️",
      no_of_seats: "20 Seats",
    },
    {
      bus_no: "Ap8295",
      departure: "VIJAYAWADA",
      destination: "HYDERABAD",
      departure_time: `8:00 AM`,
      arrival_time: "13:00 PM",
      travells: "🚍 Orange Travels",
      price: 750,
      type: "A/C Sleeper (2+1)",
      journey_time: "6:00 Hours",
      rating: "3.9",
      reviews: "2310 🙋‍♂️",
      no_of_seats: "25 Seats",
    },
    {
      bus_no: "Ap3295",
      departure: "VIJAYAWADA",
      destination: "HYDERABAD",
      departure_time: `17:00 PM`,
      arrival_time: "23:30 PM",
      journey_time: "6:30 Hours",
      travells: "🚌 Morning Star Travels",
      price: 750,
      type: "A/C-Seater (2+1)",
      rating: "4.3",
      reviews: "1227 🙋‍♂️",
      no_of_seats: "7 Seats",
    },
    {
      bus_no: "Ap9255",
      departure: "HYDERABAD",
      destination: "GOA",
      departure_time: `12:00 PM`,
      arrival_time: "2:00 AM",
      travells: "🚌 VRL Travels",
      price: 1650,
      type: "A/C Sleeper (2+1)",
      journey_time: "15:30 Hours",
      rating: "4.9",
      reviews: "4512 🙋‍♂️",
      no_of_seats: "14 Seats",
    },
    {
      bus_no: "Ap505",
      departure: "HYDERABAD",
      destination: "GOA",
      departure_time: `9:00 AM`,
      arrival_time: "23:00 PM",
      travells: "🚌 Raghu Travels",
      price: 1850,
      type: "A/C Sleeper (2+1)",
      journey_time: "14:00 Hours",
      rating: "4.8",
      reviews: "4902 🙋‍♂️",
      no_of_seats: "4 Seats",
    },
    {
      bus_no: "Ap6415",
      departure: "GOA",
      destination: "HYDERABAD",
      departure_time: `17:00 PM`,
      arrival_time: "9:30 AM",
      travells: "🚎 Kaveri Travels",
      price: 1250,
      type: "A/C Sleeper (2+1)",
      journey_time: "14:30 Hours",
      rating: "4.7",
      reviews: "1812 🙋‍♂️",
      no_of_seats: "23 Seats",
    },
    {
      bus_no: "Ap0405",
      departure: "VIJAYAWADA",
      destination: "GOA",
      departure_time: `17:00 PM`,
      arrival_time: "9:30 AM",
      travells: "🚎 YSP Travels",
      price: 1850,
      type: "A/C Sleeper (2+1)",
      journey_time: "14:30 Hours",
      rating: "3.5",
      reviews: "1012 🙋‍♂️",
      no_of_seats: "7 Seats",
    },
  ];

  localStorage.setItem("data_bus", JSON.stringify(buses_data));
  const bus_data = JSON.parse(localStorage.getItem(`data_bus`));

  function from_fun(f) {
    setfrom_value(f.target.value);
  }
  function to_fun(t) {
    setto_value(t.target.value);
  }

  function select_value(e) {
    e.preventDefault();

    const showbuses = bus_data.filter(
      (f) => f.departure === from_value && f.destination === to_value
    );
    setshowbuses(showbuses);

    // console.log(showbuses);
    if (from_value === to_value) {
      toast.error("Both Values Can't Be Same", { position: "top-center" });
    }
  }

  return (
    <>
      <div className="main_body">
        <div className="btn">
          <button className="log_out_btn">
            <NavLink to="/Login" className="logout_text">
              &larr; Log Out
            </NavLink>
          </button>
        </div>
        <div className="main">
          <form className="main_form" onChange={from_fun}>
            <label className="main_label">From </label>
            <select className="form_select">
              <option>Select City</option>
              <option value="HYDERABAD">HYDERABAD</option>
              <option value="VIJAYAWADA">VIJAYAWADA</option>
              <option value="GOA">GOA</option>
            </select>
          </form>

          <form className="main_form1" onChange={to_fun}>
            <label className="main_label1">To&nbsp;</label>
            <select className="to_select">
              <option>Enter Destination</option>
              <option value="VIJAYAWADA">VIJAYAWADA</option>
              <option value="HYDERABAD">HYDERABAD</option>
              <option value="GOA">GOA</option>
            </select>
          </form>
          <button className="search" onClick={select_value}>
            Search
          </button>
        </div>
        {showbuses && <Hyderabad busdata={showbuses}></Hyderabad>}
      </div>
      <ToastContainer autoClose={1250}></ToastContainer>
    </>
  );
}

export default Main;
