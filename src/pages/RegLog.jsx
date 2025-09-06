import { ArrowLeft } from "lucide-react";
import logo from "../assets/sufcart-logo/sufcart-white-2.png";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegLog = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("login");
  return (
    <>
      <section className="flex flex-col items-center sm:p-10 p-4 bg-black gap-y-8 min-h-screen">
        <button
          className="flex items-center gap-3 text-white cursor-pointer hover:bg-gray-800 px-6 py-2 rounded-md"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowLeft className="w-4" />
          Back to home
        </button>
        <img src={logo} className="w-4" />

        <section
          className="bg-white sm:w-1/3 w-full p-6 rounded-md flex flex-col gap-3 items-center"
          onSubmit={(e) => {
            e.target.preventDefault();
          }}
        >
          <h2 className="text-2xl font-bold">Welcome to Sufcart</h2>
          <p>Sign in to your account or create a new one</p>
          <div className="flex gap-2 justify-between w-full">
            <Button
              text={"Sign In"}
              styles={
                " w-full py-2 border-1 border-white focus:shadow-sm hover:border-1 hover:border-purple-300 "
              }
              onClick={() => {
                setCurrent("login");
              }}
            />
            <Button
              text={"Sign Up"}
              styles={
                " w-full py-2 border-1 border-white focus:shadow-sm hover:border-1 hover:border-purple-300"
              }
              onClick={() => {
                setCurrent("signup");
              }}
            />
          </div>
          {current == "login" && (
            <>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex items-center w-full gap-3 cursor-pointer">
                <input type="radio" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me" className="font-semibold">
                  Remember me
                </label>
              </div>
              <Button
                text={"Sign in"}
                styles={
                  "w-full py-2 bg-purple-800 text-white text-sm font-semibold"
                }
              />
              <Button
                text={"forget your password?"}
                styles={"w-full py-2 text-sm font-semibold"}
              />
            </>
          )}
          {current == "signup" && (
            <>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Gender</label>
                <select
                  name=""
                  id=""
                  className="w-full border-1 border-purple-200 text-sm py-2 rounded-md"
                >
                  <option value="none">select gender</option>
                  <option value="male">male</option>

                  <option value="female">female</option>
                </select>
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Date of birth</label>
                <input
                  type="date"
                  placeholder="Enter your phone number"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Create your password"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <label className="font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="border-1 border-purple-200 py-2 px-3 rounded-md text-sm"
                />
              </div>
              <div className="flex items-center w-full gap-3 cursor-pointer">
                <input type="radio" name="term-1" id="term-1" />
                <label htmlFor="term-1" className="font-semibold">
                  I accept the Terms and Conditions
                </label>
              </div>
              <div className="flex items-center w-full gap-3 cursor-pointer">
                <input type="radio" name="term-2" id="term-2" />
                <label htmlFor="term-2" className="font-semibold">
                  I accept the Terms of Service
                </label>
              </div>
              <Button
                text={"Sign up"}
                styles={
                  "w-full py-2 bg-purple-800 text-white text-sm font-semibold"
                }
              />
            </>
          )}
        </section>
      </section>
    </>
  );
};
export default RegLog;
