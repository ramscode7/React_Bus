// import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Form";
import Form from "./components/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/BusMain";

const userData = localStorage.getItem("userdata");
const tickets = localStorage.getItem("tickets");

if (userData === null) {
  const setUsersData = [];
  localStorage.setItem("userdata", JSON.stringify(setUsersData));
}

if (tickets === null) {
  localStorage.setItem("tickets", JSON.stringify([]));
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form></Form>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Main" element={<Main></Main>} />
      </Routes>
    </>
  );
}

export default App;
