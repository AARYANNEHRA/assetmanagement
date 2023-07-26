import React, { useState } from "react";
import "./Right.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Right({ setuser }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const onlogin = (e) => {
    const uemail = email;
    const upassword = password;
    const user = { uemail, upassword };
    if (uemail && upassword) {
      axios.post("https://assetmangement.onrender.com/login", user).then((res) => {
        if (res.data.existuser) {
          setuser(res.data.existuser);
          window.localStorage.setItem("isLoggedin", true);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="Right">
      <div className="formstart">
        <h1>Login</h1>
        <br />
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
        <button type="submit" className="button" onClick={onlogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Right;
