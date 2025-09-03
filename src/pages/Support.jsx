import {
  ArrowLeft,
  Bot,
  Clock,
  CreditCard,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShoppingBasket,
  Smartphone,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function Support() {
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
          Contact <span className="text-purple-800">Support</span>
        </h1>
        <p className="text-gray-300 text-center font-medium text-xl w-2/3">
          We're here to help! Get in touch with our support team for assistance
          with any questions or issues.
        </p>
      </section>
      <section className="flex md:flex-row flex-col p-10 gap-10 min-h-screen">
        <form className="sm:w-2/3 border-1 border-purple-300 p-10 flex flex-col gap-4 rounded-lg">
          <h1 className="font-semibold text-2xl">Submit a Support Request</h1>
          <p>
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
          <div className="flex sm:flex-row flex-col gap-4 sm:items-center w-full">
            <div>
              <label htmlFor="first-name" className="font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="border-1 text-sm font-medium border-purple-400 px-3 py-2 rounded-md w-full outline-purple-800"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="border-1 text-sm font-medium border-purple-400 px-3 py-2 rounded-md w-full outline-purple-800"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="font-semibold">
              Email Address
            </label>
            <input
              type="text"
              placeholder="youremail@example.com"
              className="border-1 text-sm font-medium border-purple-400 px-3 py-2 rounded-md w-full outline-purple-800"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="font-semibold">
              Subject
            </label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="border-1 text-sm font-medium border-purple-200 px-3 py-2 rounded-md w-full outline-purple-800"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="font-semibold">
              Description
            </label>
            <textarea
              name=""
              id=""
              placeholder="Please describe your issue or complaint in detail. Include any relevant information that might help us assit you better"
              className="border-1 text-sm font-medium border-purple-400 px-3 py-2 rounded-md w-full min-h-40 outline-purple-800"
            ></textarea>
          </div>
          <label htmlFor="file" className="font-semibold">
            Attachments (optional)
          </label>
          <input type="file" name="" id="" placeholder="" />
          <button
            type="submit"
            className="py-2 px-4 w-full  bg-purple-800 text-white rounded-lg text-sm"
          >
            Submit Support Request
          </button>
        </form>
        <div className="sm:w-1/3 w-full flex flex-col gap-2">
          <div className="border-1 border-purple-200 rounded-lg p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Contact Information</h1>
            <h6 className="text-gray-900 mb-3">
              Other ways to reach the support team
            </h6>
            <span className="flex items-start gap-3 font-bold text-lg">
              <Phone className="w-6 text-purple-400" />
              <div className="flex flex-col">
                <span>Phone</span>
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
            </span>
            {/*  */}
            <span className="flex items-start gap-3 font-bold text-lg">
              <Mail className="w-6 text-purple-400" />
              <div className="flex flex-col">
                <span>Email</span>
                <span className="text-gray-600 text-sm">support@six6.com</span>
              </div>
            </span>
            {/*  */}
            <span className="flex items-start gap-3 font-bold text-lg">
              <MapPin className="w-6 text-purple-400" />
              <div className="flex flex-col">
                <span>Address</span>
                <span className="text-gray-600 text-sm">
                  123 Digital Street Tech City, TC 12345
                </span>
              </div>
            </span>
            {/*  */}
            <span className="flex items-start gap-3 font-bold text-lg">
              <Clock className="w-6 text-purple-400" />
              <div className="flex flex-col">
                <span>Support Hours</span>
                <span className="text-gray-600 text-sm">24/7 Available</span>
              </div>
            </span>
          </div>
          <div className="border-1 border-purple-200 rounded-lg p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Frequently Asked Questions</h1>
            <div>
              <h2 className="font-medium text-lg">
                {" "}
                How quickly will I get a response?
              </h2>
              <p className="text-gray-700 text-sm">
                {" "}
                We typically respond within 24 hours, often much sooner.
              </p>
            </div>
            <div>
              <h2 className="font-medium text-lg">
                {" "}
                Can I track my support request?{" "}
              </h2>
              <p className="text-gray-700 text-sm">
                {" "}
                Yes, you'll receive a ticket number via email to track your
                request.
              </p>
            </div>
            <div>
              <h2 className="font-medium text-lg">
                {" "}
                What information should I include?
              </h2>
              <p className="text-gray-700 text-sm">
                {" "}
                Please provide as much detail as possible, including screenshots
                if relevant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Support;
