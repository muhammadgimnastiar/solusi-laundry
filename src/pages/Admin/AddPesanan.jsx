import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState("");
  const [dibayar, setBayar] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/Users", {
        name,
        status,
        total,
        dibayar,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Total</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="Total"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Dibayar</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={dibayar}
                onChange={(e) => setBayar(e.target.value)}
                placeholder="Dibayar"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
