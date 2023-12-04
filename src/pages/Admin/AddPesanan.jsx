import React, { useState } from "react";
import api from "../../api/AxiosConfig";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [berat, setBerat] = useState("");
  const [status, setStatus] = useState("Baru");
  const [paket, setPaket] = useState("");
  const [total, setTotal] = useState("");
  const [dibayar, setBayar] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await api.post("/Users", {
        name,
        status,
        paket,
        berat,
        total,
        dibayar,
      });
      navigate("/admin/pesanan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-4xl font-extrabold font-poppins py-10">
          Tambah Pesanan
        </h1>
        <div className="columns mt-5 is-centered">
          <div className="column is-half">
            <form onSubmit={saveUser}>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama"
                  />
                </div>
              </div>
              {/* Status Pesanan */}
              <div className="field">
                <label className="label">Berat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                    placeholder="Berat"
                  />
                </div>
              </div>
              {/* Paket */}
              <div className="field">
                <label className="label">Paket</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={paket}
                    onChange={(e) => setPaket(e.target.value)}
                    placeholder="Dibayar"
                  />
                </div>
              </div>
              {/* Pembayaran */}
              <div className="field">
                <label className="label">Pembayaran</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={dibayar}
                    onChange={(e) => setBayar(e.target.value)}
                    placeholder="Dibayar"
                  />
                </div>
              </div>
              {/* Total Bayar */}
              <div className="field">
                <label className="label">Total bayar</label>
                <div className="control">
                  <input
                    type="text"
                    className="input rounded-xl py-3 px-2 border border-blue-gray-800 min-w-full mt-2 mb-4"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="Total"
                  />
                </div>
              </div>
              <div className="field">
                <button
                  type="submit"
                  className="button w-28 h-[47px] p-2.5 bg-indigo-800 rounded-[15px] justify-start items-start gap-2.5 inline-flex"
                >
                  <h1 className="w-[92px] h-[22px] text-center text-white text-xl font-bold font-inter">
                    Tambah
                  </h1>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
