import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

function Login() {
  const { user, loginUser } = useAuth();

  const [input, setinput] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin/pesanan");
    }
  });

  //   const handleChange = (e) => {
  //     setinput({ ...input, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input.email;
    const password = input.password;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <div className="bg-bg text-white h-screen flex justify-center items-center">
      <div className="bg-secondary-blue border border-blue-500 rounded-md p-20 shadow-md relative">
        <h1 className="text-4xl font-bold text-center mb-6">Masuk Akun</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="block rounded-xl w-72 py-2.5 px-3 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
              value={input.email}
              onChange={(e) => setinput({ ...input, email: e.target.value })}
            />
          </div>
          <div className="relative my-4">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="block rounded-xl w-72 py-2.5 px-3 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
              value={input.password}
              onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full pb-2 pt-2 place-content-center rounded-xl font-bold bg-primary-blue"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
