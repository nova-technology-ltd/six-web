import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from "../assets/six-logo.png";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-10 bg-gray-900 gap-6 w-full min-h-screen">
      <img src={logo} alt="six logo" className="bg-black sm:w-36 w-28" />
      <div
        className="border-1 border-purple-900  rounded-full px-4 py-2 capitalize text-purple-900"
        style={{ backgroundColor: "rgba(19, 0, 15, 0.2)" }}
      >
        transforming digital connections
      </div>
      <h1 className="sm:text-6xl text-3xl font-extrabold text-white text-center">
        Connect. Pay. <br />
        <span className="text-purple-800">Simplify</span>
      </h1>
      <p className="sm:w-2/3 text-center sm:text-2xl text-base text-gray-400">
        SIX6 is your premier digital service provider, revolutionizing how
        people connect and transact online with seamless social engagement,
        instant bill payments, and innovative solutions.
      </p>
      <div className="flex gap-4 sm:flex-row flex-col ">
        <Button
          text={"Get Started Today"}
          styles={"bg-purple-800 text-white text-sm px-10 py-3 gap-4"}
          iright={<ArrowRight />}
        />
        <Button
          text={"Learn More"}
          styles={"bg-white text-sm hover:text-white hover:bg-black px-10 py-4"}
        />
      </div>
    </section>
  );
};
export default Hero;
