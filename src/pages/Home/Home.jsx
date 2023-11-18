import React from "react";
import { Button } from "@material-tailwind/react";



import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />

      <Button
        color="green"
        className="fixed z-50 right-8 bottom-10 rounded-full "
      >
        <i className="fab fa-whatsapp text-lg" />
      </Button>
    </>
  );
}

export default Home;
