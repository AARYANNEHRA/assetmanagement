import React, { useState } from "react";
import axios from "axios";
import "./Sright.css";
import { useNavigate } from "react-router-dom";
function Sright() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const onSignup = (e) => {
    const uemail = email;
    const upassword = password;
    const uname = name;
    const user = { uname, uemail, upassword };
    if (uname && uemail && upassword) {
      axios.post("https://assetmangement.onrender.com/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="Sright">
      <div className="formstart">
        <h1>Sign Up</h1>
        <br />
        <div>
          <input
            className="input"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="pasword"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="button" onClick={onSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Sright;
