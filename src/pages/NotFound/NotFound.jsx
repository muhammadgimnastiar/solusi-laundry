import { useRouteError } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Navbar from "../../components/Navbar/Navbar";
export function NotFound() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Navbar />
      <div className="bg-bg">
        <div className="container mx-auto my-auto py-5 md:py-24 ">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 ">
              <div className="justify-center xl:justify-start">
                <h1 className="font-inter font-bold text-3xl lg:text-6xl tracking-tight text-center lg:text-start">
                  Oops!! <br />{" "}
                  <span className="text-primary-blue">
                    Ada yang salah <br />
                  </span>{" "}
                  di halaman yang anda tuju
                </h1>
              </div>
              <div className="gap-2 mx-auto flex justify-center xl:justify-start py-32">
                <Button className="bg-primary-blue rounded-xl px-8 py-3 font-inter font-semibold text-bg ">
                  Homepage
                </Button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-1 ">
              <img src="./images/hero.png" className="items-center" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
