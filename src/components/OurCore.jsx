import { ArrowRight, Currency, Smartphone, Users } from "lucide-react";
import Button from "./Button";
const Card = ({ text, array, heading, img }) => {
  return (
    <div className="shadow-sm rounded-lg flex flex-col items-center gap-4 p-6 transition-all hover:mb-10 hover:shadow-lg">
      <span className="bg-purple-300 p-3 w-max rounded-md">{img}</span>
      <h1>{heading}</h1>
      <p className="text-center text-sm">{text}</p>
      <ul className="self-start text-sm list-disc flex flex-col gap-2">
        {array &&
          array.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
      <Button
        text={"Learn More"}
        styles={
          "border-[1px] border-purple-300 w-full text-sm hover:bg-purple-700 hover:text-white gap-3 text-xs py-1"
        }
        iright={<ArrowRight className="w-4" />}
      />
    </div>
  );
};
function OurCore() {
  return (
    <section className="flex flex-col gap-6 px-4 justify-center items-center mt-4 h-max py-10">
      <h1 className="text-4xl font-bold">Our Core Services</h1>
      <p className="text-center">
        Discover how SIX6 transforms your digital experience with our
        comprehensive suite of services designed for individuals, businesses,
        and communities.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-between h-max w-full p-10 sm:px-20 px-4 gap-10">
        <Card
          heading={"Social Engagement Platforms"}
          array={[
            "Community Building",
            "Real-time Messaging",
            "Content Sharing",
            "Event Management",
          ]}
          img={<Users className="text-purple-800" />}
        />
        <Card
          heading={"Seamless Bill Payments"}
          array={[
            "One-click Payments",
            "Automatic Scheduling",
            "Multiple Payment Options",
            "Transaction History",
          ]}
          img={<Currency className="text-purple-800" />}
        />{" "}
        <Card
          heading={"Innovative Digital Solutions"}
          array={[
            "Mobile-first Design",
            "Cloud Integration",
            "AI-powered Features",
            "Custom Solutions",
          ]}
          img={<Smartphone className="text-purple-800" />}
        />
      </div>
      <Button
        text={"Explore All Services"}
        styles={"bg-purple-900 text-white py-3 px-10 gap-3"}
        iright={<ArrowRight className="w-4" />}
      />
    </section>
  );
}
export default OurCore;
