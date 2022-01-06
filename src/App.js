import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [username, setUsername] = useState("");
  const [mobno, setMobno] = useState("gdg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const usernameHandler = (e) => {
    const newusername = e.target.value;
    setUsername(newusername);
  };
  const mobnoHandler = (e) => {
    const newmobno = e.target.value;
    setMobno(newmobno);
  };
  const emailHandler = (e) => {
    const newemail = e.target.value;
    setEmail(newemail);
  };
  const passwordHandler = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const register = () => {
    //alert(`${username} ${mobno} ${email} ${password}`);

    const user = {
      username: username,
      mobno: mobno,
      email: email,
      password: password,
    };
    const newlist = [user, ...list];
    setList(newlist);
    setUsername("");
    setMobno("");
    setEmail("");
    setPassword("");
  };

  const css1 = "form form-control w-50 bg-alert alert-success mb-2";

  return (
    <div className="bg-alert alert-danger">
      <div className="bg-dark text-light p-2 fs-1 mb-1">Registration Form</div>
      <div>
        <input
          type="text"
          className={css1}
          value={username}
          placeholder="Enter username.."
          onChange={usernameHandler}
        />
      </div>
      <div>
        <input
          type="text"
          className={css1}
          value={mobno}
          placeholder="Enter mobile number.."
          onChange={mobnoHandler}
        />
      </div>
      <div>
        <input
          type="text"
          className={css1}
          value={email}
          placeholder="Enter email-id.."
          onChange={emailHandler}
        />
      </div>{" "}
      <div>
        <input
          type="text"
          className={css1}
          value={password}
          placeholder="Enter password.."
          onChange={passwordHandler}
        />
      </div>
      <div>
        <input
          type="button"
          className="btn btn-outline-danger w-25 mb-1"
          value="Register"
          onClick={register}
        />
      </div>
      <div>
        {list.map((item) => (
          <div className="bg-alert alert-info mb-1 p-1 border border-danger text-dark fw-bold">
            `Name : {item.username}, Mob No: {item.mobno}, Email Id:{" "}
            {item.email}, Password : {item.password}`
          </div>
        ))}
      </div>
    </div>
  );
}
