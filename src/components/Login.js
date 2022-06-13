import "./Login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
  const History = useNavigate();
  const [userlogin, setuserlogin] = useState({
    email: "",
    password: "",
  });
  const [data, setdata] = useState([]);
  // console.log(userlogin);

  const LoginD = (r) => {
    const { value, name } = r.target;
    // console.log(value, name);
    setuserlogin(() => {
      return {
        ...userlogin,
        [name]: value,
      };
    });
  };

  const getData = (e) => {
    e.preventDefault();
    const logDetails = localStorage.getItem("userdata");

    const { email, password } = userlogin;
    if (email.trim === "") {
      toast.error("Email is required", { position: "top-right" });
    } else if (!email.includes("@")) {
      toast.error("Please Enter Valid Email", { position: "top-right" });
    } else if (password === "") {
      toast.error("Password is required", { position: "top-right" });
    } else if (password.length < 5) {
      toast.error("Password is weak", { position: "top-right" });
    } else {
      if (logDetails && logDetails.length) {
        const logData = JSON.parse(logDetails);
        const logData1 = logData.filter((a, b) => {
          return a.email === email && a.password === password;
        });
        if (logData1.length === 0) {
          toast.error("Invalid Details", { position: "top-right" });
        } else {
          toast.info("WELCOME 🙏", { position: "top-right" });
          setTimeout(() => {
            History("/Main");
          }, 1200);
        }
      }
    }
    // console.log(userreg);
  };
  return (
    <>
      <div className="log_body"></div>
      <h1 className="log">LOG_IN..!!</h1>
      <form className="login1">
        <label className="login-label">Enter Your Email</label>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          onChange={LoginD}
          name="email"
          autoComplete="off"
        />
        <label className="login-label">Enter Your Password</label>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={LoginD}
          name="password"
          autoComplete="off"
        />
        <div className="cont">
          <button className="login-btn" onClick={getData}>
            LogIn 🚍
          </button>
          <button className="back">
            <NavLink to={"/"} className="back_text">
              &larr; Back
            </NavLink>
          </button>
        </div>
      </form>
      <ToastContainer autoClose={1850}></ToastContainer>
    </>
  );
}
export default Login;
