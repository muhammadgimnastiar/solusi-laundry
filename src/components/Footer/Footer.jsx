import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white rounded-t-2xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-16 md:justify-between sm:px-12 p-20 ">
        <div className="">
          <img src="./solusilaundry.png" width={100} className="pb-3" />
          <p>
            081254756814
            <br />
            Pedalangan, Banyumanik <br />
            Semarang
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="font-bold pb-8">Quick Links</h1>
            <ul>
              <li className="pb-5">Produk</li>
              <li>Informasi</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="pb-5">Perusahaan</li>
              <li>Media</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold pb-8">Subscribe</h1>
          <input
            type="text"
            placeholder="Get Product Updates"
            className="text-gray-800 sm:w-72 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md px-2 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-700 duration-300 px-5 py-2.5 rounded-md text-white">
            <i className="fas fa-arrow-right w-10"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <div className="cursor-pointer">
          <i className="fab fa-linkedin-in px-8"></i>
          <i className="fab fa-facebook-f px-8"></i>
          <i className="fab fa-twitter px-8"></i>
        </div>
        <span>
          A Product of <strong>Solusi Laundry</strong>
        </span>
        <span>© 2023 Lift Media. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
