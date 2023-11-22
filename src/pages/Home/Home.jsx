import React from "react";
import { Button } from "@material-tailwind/react";



import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <div className="bg-bg">
      <Hero />

      <Button
        color="green"
        className="fixed z-50 right-8 bottom-10 rounded-full "
      >
        <i className="fab fa-whatsapp text-lg" />
      </Button>
      </div>
    </>
  );
}

export default Home;
