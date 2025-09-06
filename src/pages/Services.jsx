import {
  ArrowLeft,
  Bot,
  CreditCard,
  Headphones,
  ShoppingBasket,
  Smartphone,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FeatureCard } from "../components/OurCore";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="p-12">
        <button
          className="flex items-center gap-3 font-semibold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowLeft className="w-4 " />
          Back to home
        </button>
      </section>
      <section className="bg-gray-900 p-10 flex flex-col gap-4 items-center">
        <h1 className="text-6xl text-white font-extrabold text-center">
          All <span className="text-purple-800">Services</span>
        </h1>
        <p className="text-gray-300 text-center font-medium text-xl w-2/3">
          Discover our comprehensive suite of digital services designed to
          transform your online experience
        </p>
      </section>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        <FeatureCard
          heading={"Social Community"}
          text={
            "Connect with like-minded individuals, share experiences, and build meaningful relationships through our advanced social platform."
          }
          array={[
            "Real-time messaging",
            "Community groups",
            "Event planning",
            "Content sharing",
          ]}
          img={<Users className="w-6 text-purple-600" />}
          subHeading={true}
        />
        <FeatureCard
          heading={"E-commerce"}
          text={
            "Launch your online store with our comprehensive e-commerce solution featuring secure payments and inventory management."
          }
          array={[
            "Online store builder",
            "Payment processing",
            "Inventory management",
            "Analytics dashboard",
          ]}
          img={<ShoppingBasket className="w-6 text-purple-600" />}
          subHeading={true}
        />
        <FeatureCard
          heading={"Digital Banking"}
          text={
            "Experience modern banking with instant transfers, bill payments, and comprehensive financial management tools."
          }
          array={[
            "Instant transfers",
            "Bill payments",
            "Financial analytics",
            "Multi-currency support",
          ]}
          img={<CreditCard className="w-6 text-purple-600" />}
          subHeading={true}
        />
        <FeatureCard
          heading={"AI Services"}
          text={
            "Leverage artificial intelligence to automate tasks, gain insights, and enhance your digital experience."
          }
          array={[
            "Smart automation",
            "Predictive analytics",
            "Natural language processing",
            "Machine learning models",
          ]}
          img={<Bot className="w-6 text-purple-600" />}
          subHeading={true}
        />
        <FeatureCard
          heading={"24/7 Support"}
          text={
            "Get round-the-clock assistance from our dedicated support team through multiple channels."
          }
          array={[
            "Live chat support",
            "Phone assistance",
            "Email support",
            "Video consultations",
          ]}
          img={<Headphones className="w-6 text-purple-600" />}
          subHeading={true}
        />
        <FeatureCard
          heading={"Mobile Applications"}
          text={
            "Access all SIX6 services on-the-go with our feature-rich mobile applications for iOS and Android."
          }
          array={[
            "Cross-platform compatibility",
            "Offline functionality",
            "Push notifications",
            "Biometric security",
          ]}
          img={<Smartphone className="w-6 text-purple-600" />}
          subHeading={true}
        />
      </section>
      <section className="bg-purple-100 p-12 flex flex-col items-center gap-6 justify-center p-10">
        <h1 className="text-5xl font-extrabold text-center">
          Ready to Get Started?
        </h1>
        <p className="text-gray-400 text-center">
          Choose the services that best fit your needs and start your <br />{" "}
          digital transformation today.
        </p>
        <div className="flex gap-3 items-center sm:flex-row flex-col">
          <Button
            text={"Get Started"}
            styles={"bg-purple-700 text-white px-8 py-3 text-xs"}
          />
          <Button
            text={"Contact Sales"}
            styles={
              "px-8 py-3 bg-white text-xs hover:bg-black hover:text-white"
            }
          />
        </div>
      </section>
    </>
  );
};
export default Services;
