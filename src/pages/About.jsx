import { ArrowLeft, Award, Heart, Target, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/sufcart-logo/sufcart-white-2.png";
import Button from "../components/Button";
const CardMin = ({ img, heading, text }) => {
  return (
    <div className="flex flex-col p-10 rounded-lg border-1 border-purple-300 shadow-sm gap-3">
      <div className="flex items-center gap-3">
        {img} <h2 className="text-3xl font-semibold">{heading}</h2>
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};
const StoryCard = ({ date, title, text }) => {
  return (
    <div className="flex sm:flex-row flex-col gap-6 p-2 sm:w-2/3 w-full">
      <div className="bg-purple-800 text-white px-8 py-2 rounded-lg h-max font-bold w-max">
        {date}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
};
const CardMax = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center border-1 border-purple-200 p-5 rounded-lg shadow-sm gap-6">
      {img}
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-gray-800 text-center">{text}</p>
    </div>
  );
};
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="p-10">
        <Link className="flex gap-2 items-center font-bold" to={"/"}>
          <ArrowLeft className="w-4" />
          Back to home{" "}
        </Link>
      </section>
      <section className="bg-black flex flex-col items-center gap-4 p-10">
        <img src={logo} alt="sucart logo" className="w-8" />
        <h1 className="text-6xl font-extrabold text-white">
          About <span className="text-purple-800">Sufcart</span>
        </h1>
        <p className="text-gray-300 text-2xl sm:w-2/3 text-center ">
          Transforming how people connect and transact online through innovative
          digital solutions
        </p>
      </section>
      <section className="grid sm:grid-cols-2 p-10 items-center gap-6">
        <CardMin
          img={<Target className="w-8 text-purple-600" />}
          heading={"Our Mission"}
          text={
            "To empower individuals, businesses, and communities by providing secure, user-friendly, and accessible digital experiences that simplify everyday online activities. We strive to bridge the gap between technology and human needs through innovation and excellence."
          }
        />
        <CardMin
          img={<Award className="w-8 text-purple-600" />}
          heading={"Our Vision"}
          text={
            "To become the leading digital service provider globally, recognized for transforming how people connect, transact, and engage online. We envision a world where digital interactions are seamless, secure, and accessible to everyone."
          }
        />
      </section>
      <section className="p-12 flex flex-col gap-4 items-center bg-purple-50">
        <StoryCard
          date={"2020"}
          title={"Foundation"}
          text={
            "Sufcart was founded with a vision to revolutionize digital services. We started with a small team passionate about creating seamless online experiences."
          }
        />
        <StoryCard
          date={"2021"}
          title={"First Platform Launch"}
          text={
            "Launched our first social engagement platform, connecting thousands of users and establishing our reputation for reliable digital solutions."
          }
        />{" "}
        <StoryCard
          date={"2022"}
          title={"Payment Solutions"}
          text={
            "Introduced seamless bill payment services, making it easier for users to manage their financial transactions online with security and convenience."
          }
        />{" "}
        <StoryCard
          date={"2023"}
          title={"Expansion & Innovation"}
          text={
            "Expanded our services to include e-commerce solutions, AI-powered features, and comprehensive digital banking services."
          }
        />{" "}
        <StoryCard
          date={"2024"}
          title={"Global Reach"}
          text={
            "Today, Sufcart serves customers worldwide with a comprehensive suite of digital services, continuing to innovate and lead in the digital transformation space."
          }
        />
      </section>
      <section className="sm:p-10 p-4 mt-4 flex flex-col gap-10 py-12">
        <h1 className="text-center font-bold text-5xl">Our Core Values</h1>
        <div className="flex sm:flex-row flex-col gap-4 items-center">
          <CardMax
            img={<Heart className="text-purple-600 w-24" />}
            title={"Customer First"}
            text={
              "We prioritize customer satisfaction and success in everything we do, ensuring our solutions truly meet their needs."
            }
          />
          <CardMax
            img={<Award className="text-purple-600 w-8" />}
            title={"Excellence"}
            text={
              "We strive for excellence in all aspects of our service delivery, from technology innovation to customer support."
            }
          />
          <CardMax
            img={<Users className="text-purple-600 w-8" />}
            title={"Community"}
            text={
              "We believe in building strong communities and fostering connections that create lasting value for everyone involved."
            }
          />
        </div>
      </section>
      <section className="bg-black flex flex-col items-center gap-6 p-10 py-20">
        <h1 className="text-white text-center text-4xl font-bold">
          Ready to Join Our Journey?
        </h1>
        <p className="text-gray-300 text-xl sm:w-1/2 text-center ">
          Experience the future of digital services with SIX6. Join thousands of
          satisfied users today.
        </p>
        <Button
          styles={"px-6 py-4 text-white bg-purple-800"}
          text={"Get Started Today"}
          onClick={() => {
            navigate("/registration");
          }}
        />
      </section>
    </>
  );
};
export default About;
