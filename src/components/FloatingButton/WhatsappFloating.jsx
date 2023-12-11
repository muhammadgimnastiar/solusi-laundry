import React from "react";

function WhatsappFloating() {
  return (
    <div className="fixed z-50 right-8 lg:right-28 bottom-10 rounded-full px-6 py-5 bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:pr-44 group ">
      <div className="flex items-center relative ">
        <i className="fab fa-whatsapp text-3xl text-white" />
        <div class="opacity-0 group-hover:opacity-100 absolute  z-10 inline ps-10 justify-center items-center  text-xl text-white  w-48">
          Hubungi Kami
        </div>
      </div>
    </div>
  );
}

export default WhatsappFloating;
