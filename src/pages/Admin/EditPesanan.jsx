import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState("");
  const [dibayar, setBayar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/Users/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/Users/${id}`);
    setName(response.data.name);
    setStatus(response.data.status);
    setTotal(response.data.total);
    setBayar(response.data.dibayar);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                type="number"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
