import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import { NavLink } from "react-router-dom";

function Form() {
  const data = JSON.parse(localStorage.getItem(`userdata`));
  // console.log(data);

  let [name, setname] = useState(``);
  let [email, setemail] = useState(``);
  let [password, setpassword] = useState(``);

  let userreg = {
    name: name,
    email: email,
    password: password,
  };

  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = userreg;
    if (name === "") {
      toast.error("Name is required ❌", {
        position: "top-right",
      });
    } else if (email.trim === "") {
      toast.error("Email is required ❌", { position: "top-right" });
    } else if (!email.includes("@")) {
      toast.error("Please Enter Valid Email ❌", { position: "top-right" });
    } else if (password === "") {
      toast.error("Password is required ❌", { position: "top-right" });
    } else if (password.length < 5) {
      toast.error("Password is weak ❌", {
        position: "bottom-right",
      });
    } else {
      toast.success("Successfully Registered 😀", { position: "top-right" });
      data.push(userreg);
      localStorage.setItem("userdata", JSON.stringify(data));
      setname("");
      setemail("");
      setpassword("");
    }
    // console.log(userreg);
  };

  return (
    <>
      <div className="reg_body">
        <h1 className="reg">Register Form..!!</h1>
        <form className="Form1">
          <label className="Form1-label">Your Name</label>
          <input
            type="text"
            placeholder="Name"
            className="Form1-input"
            value={name}
            autoComplete="off"
            onChange={(e) => setname(e.target.value)}
          />
          <label className="Form1-label">Your Email</label>
          <input
            type="email"
            placeholder="Email"
            className="Form1-input"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label className="Form1-label">Password</label>
          <input
            type="password"
            placeholder="password"
            className="Form1-input"
            autoComplete="off"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="Form1-btn" onClick={addData}>
            Register &rarr;
          </button>

          <p className="para">
            Already Registered
            <span className="spa">
              <NavLink to="/Login" className="logout_text1">
                &nbsp;LOGIN!
              </NavLink>
            </span>
          </p>
        </form>
      </div>
      <ToastContainer autoClose={1850}></ToastContainer>
    </>
  );
}

export default Form;
