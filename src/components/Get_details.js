import { useState } from "react";
import "./Get_details.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Getdetails({ For_Booking, onclose, items }) {
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [seats, setseats] = useState(1);

  const confirm = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email is required 🚫", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please Enter Valid Email", { position: "top-center" });
    } else if (number === "") {
      toast.error("Must Enter Mobile Number", { position: "top-center" });
    } else if (number.length < 9) {
      toast.error("Please Enter Valid Mobile Number", {
        position: "top-center",
      });
    } else if (age === "") {
      toast.error("Please Enter Age", {
        position: "top-center",
      });
    } else if (gender === "") {
      toast.error("Please Select Gender", {
        position: "top-center",
      });
    } else if (seats === "") {
      toast.error("Please Select No of Seats", {
        position: "top-center",
      });
    } else {
      toast.success("Your Tickets Confirmed", { position: "top-center" });
      const tickets = JSON.parse(localStorage.getItem("tickets"));
      tickets.push({ email, age, gender, number, seats });
      localStorage.setItem("tickets", JSON.stringify(tickets));
      setemail("");
      setage("");
      setgender("");
      setnumber("");
      setTimeout(() => {
        onclose();
      }, 1800);
    }
  };

  const increment = () => {
    if (seats < 5) {
      setseats(seats + 1);
    }
  };

  const decrement = () => {
    if (seats > 1) {
      setseats(seats - 1);
    }
  };

  if (!For_Booking) return null;
  return (
    <>
      <div className="get_container">
        <h2 className="booking-form">Book Tickets Now_!</h2>
        <input
          type="text"
          placeholder="Your Email"
          onChange={(e) => setemail(e.target.value)}
          className="mail_text"
          value={email}
        />
        <input
          type="text"
          placeholder="Enter Your Number"
          className="number_text"
          onChange={(n) => setnumber(n.target.value)}
          value={number}
        />
        <input
          type="text"
          placeholder="Enter Your Age"
          onChange={(a) => setage(a.target.value)}
          className="age_text"
          value={age}
        />

        <form
          className="gender"
          onChange={(g) => setgender(g.target.value)}
          value={gender}
        >
          <select className="male">
            <option>Select Gender</option>
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
        </form>

        <div className="seats">
          <i className="fa-solid fa-minus minus" onClick={decrement}></i>
          <input
            type="text"
            placeholder="No Of Seats"
            className="no_of_seats"
            value={seats}
            onChange={(n) => setseats(n.target.value)}
          />
          <i className="fa-solid fa-plus add" onClick={increment}></i>
        </div>

        <div className="text_no">
          <p className="price_seats">Total Price: {seats * items}/-</p>
        </div>

        <div className="btn2">
          <button className="confirm_text" onClick={confirm}>
            Book
          </button>
          <button onClick={onclose} className="cancel_text">
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer autoClose={1200}></ToastContainer>
    </>
  );
}

export default Getdetails;
