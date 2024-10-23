import PropTypes from "prop-types";
import { useState } from "react";


const Login = ({ handleLogin }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    handleLogin(Email, Password);
  };
  return (
    <>
      <div className="flex justify-center items-center rounded-lg ">
        <div className="border py-16 px-10 rounded-lg w-11/12 bg-purple-50 ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center justify-center space-y-5 
          ">
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 md:text-2xl outline-none border-emerald-600 py-2 px-10 rounded-full bg-transparent placeholder:text-gray-400"
              type="email"
              placeholder="Enter Email"
            />
            <input
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 md:text-2xl outline-none border-emerald-600 py-2 px-10 rounded-full bg-transparent placeholder:text-gray-400"
              type="password"
              placeholder="Enter password"
            />

            <button className="border-2 md:text-2xl folnt-bold outline-none border-emerald-600 py-2 px-10 rounded-full bg-transparent placeholder:text-gray-400 w-[110%] ">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};


export default Login;
Login.propTypes = {
  handleLogin:PropTypes.func.isRequired
};