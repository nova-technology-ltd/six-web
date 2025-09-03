import { CloudLightning, Heart, Shield, User2, Users } from "lucide-react";
import Button from "./Button";
function Card({ img, text, title }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-xl">
      <span className="bg-purple-300 p-3 w-max rounded-md">{img}</span>
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm font-light">{text}</p>
    </div>
  );
}
const joinOurCommunity = () => {
  return (
    <section className="p-10 h-max">
      <div className="flex sm:flex-row flex-col gap-20 items-center">
        <div className="flex flex-col items-start justify-start gap-4 sm:w-1/2">
          <h1 className="sm:text-5xl text-2xl font-extrabold">
            Empowering Your <br />
            <span className="text-purple-800">Digital Journey</span>
          </h1>
          <p className="text-gray-700">
            Operating on a customer-first model, SIX6 leverages cutting-edge
            technology to deliver secure, user-friendly, and accessible digital
            experiences that empower people to do more online with ease
          </p>
          <p>
            We cater to individuals seeking convenience, businesses looking for
            efficiency, and communities building connections. Our platform
            combines the power of social engagement, seamless transactions, and
            innovative solutions in one unified experience
          </p>
          <Button
            text={"Join Our Community"}
            styles={"bg-purple-800 text-white py-2 px-8 text-xs gap-2"}
            iright={<User2 className="w-4" />}
          />
        </div>
        {/*  */}
        <div className="grid sm:grid-cols-2 gap-10 sm:w-1/2">
          <Card
            img={<Shield className="text-purple-600" />}
            text={
              "Your data and transactions are protected by enterprise-grade security measures."
            }
            title={"Security First"}
          />
          <Card
            img={<CloudLightning className="text-purple-600" />}
            text={
              "Experience instant transactions and real-time connections with our optimized platform."
            }
            title={"Lightning Fast"}
          />{" "}
          <Card
            img={<Heart className="text-purple-600" />}
            text={
              "Every feature we build is designed with your needs and convenience in mind."
            }
            title={"Customer-Centric"}
          />{" "}
          <Card
            img={<Users className="text-purple-600" />}
            text={
              "We foster meaningful connections between individuals, businesses, and communities."
            }
            title={"Community Driven"}
          />
        </div>
      </div>
      <div className="sm:flex grid grid-cols-2 gap-10 justify-between mt-6 p-12 pb-10">
        <h2 className="flex flex-col text-center text-purple-800 sm:text-4xl text-2xl font-extrabold">
          50k<span className="text-gray-800 text-sm">Active Users</span>
        </h2>
        <h2 className="flex flex-col text-center text-purple-800 sm:text-4xl text-2xl font-extrabold">
          99.9%<span className="text-gray-800 text-sm">Uptime</span>
        </h2>
        <h2 className="flex flex-col text-center text-purple-800 sm:text-4xl text-2xl font-extrabold">
          1M+<span className="text-gray-800 text-sm">Transactions</span>
        </h2>
        <h2 className="flex flex-col text-center text-purple-800 sm:text-4xl text-2xl font-extrabold">
          24/7<span className="text-gray-800 text-sm">Support</span>
        </h2>
      </div>
    </section>
  );
};
export default joinOurCommunity;
