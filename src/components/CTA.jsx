import {
  ArrowLeft,
  ArrowRight,
  Download,
  DownloadCloud,
  ExternalLink,
  Laptop,
  Mail,
  Smartphone,
  X,
} from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DownloadSection = ({ onClick }) => {
  const [page, setPage] = useState("general");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-xs">
      <div
        className="absolute inset-0 bg-black opacity-90"
        onClick={onClick}
      ></div>
      {/* modal box */}
      <div className="flex flex-col gap-6 p-6 bg-white rounded-lg sm:text-sm text-xs relative z-10 w-max">
        <button className="self-end -mb-4 cursor-pointer" onClick={onClick}>
          <X />
        </button>
        <div className="flex gap-2 items-center">
          <Download className="text-purple-700" />
          <h1 className="font-semibold">Download Six6 App</h1>
        </div>
        <p className="text-xs">
          Choose your platform to download the SIX6
          <br /> mobile or desktop application
        </p>
        {page == "general" && (
          <>
            <div className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md cursor-pointer hover:border-purple-300">
              <span className="bg-purple-200 sm:p-3 p-1 text-xs rounded-md">
                <Smartphone className="text-purple-600 w-4" />
              </span>
              <h1>
                Android <br /> Download for Android devices
              </h1>
              <span className="p-1 text-[10px] rounded-full font-bold px-3 bg-black text-white">
                Available
              </span>
              <Download className="w-4" />
            </div>
            <div className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md cursor-pointer hover:border-purple-300">
              <span className="bg-purple-200 p-3 rounded-md">
                <Smartphone className="text-purple-600  w-4" />
              </span>
              <h1>
                iOS <br />
                Download for iPhone and iPad
              </h1>
              <span className="p-1 text-[10px] rounded-full font-bold px-3 bg-black text-white">
                Available
              </span>
              <Download className="w-4" />
            </div>
            <div
              className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md gap-4 cursor-pointer hover:border-purple-300"
              onClick={() => {
                setPage("pcPage");
              }}
            >
              <span className="bg-purple-200 p-3 rounded-md">
                <Laptop className="text-purple-600  w-4" />
              </span>
              <h1>
                Desktop <br /> Available for Windows, macOS, and Linux
              </h1>
              <span className="p-1 text-[10px] rounded-full font-bold px-3 bg-gray-300">
                Beta
              </span>
              <ExternalLink className="w-4" />
            </div>
          </>
        )}
        {/* pc download page */}
        {page == "pcPage" && (
          <>
            <button
              className="flex items-center gap-3 hover:bg-purple-800 text-xs hover:text-white px-2 rounded-full"
              onClick={() => {
                setPage("general");
              }}
            >
              <ArrowLeft className="w-4" />
              Back to dowload section
            </button>
            <h1 className="font-bold">Choose your operating system:</h1>
            <div className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md cursor-pointer hover:border-purple-300">
              <h1>
                iOS <br />
                Download for iPhone and iPad
              </h1>

              <Download />
            </div>
            <div className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md cursor-pointer hover:border-purple-300">
              <h1>
                iOS <br />
                Download for iPhone and iPad
              </h1>

              <Download />
            </div>{" "}
            <div className="flex items-center border-[1px] border-purple-200 p-3 justify-between rounded-md cursor-pointer hover:border-purple-300">
              <h1>
                iOS <br />
                Download for iPhone and iPad
              </h1>

              <Download />
            </div>
          </>
        )}

        <p className="text-xs text-gray-700 text-center">
          By downloading, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};
function CTA() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  return (
    <section className="bg-gray-900 flex flex-col p-10  items-center min-h-screen gap-8">
      <h1 className="sm:text-6xl text-2xl font-bold text-center text-white mt-10">
        Ready to Transform Your
        <br />
        <span className="text-purple-800">Digital Experience?</span>
      </h1>
      <p className="text-gray-300 font-medium sm:text-2xl text-center sm:w-2/3">
        Join thousands of users who trust SIX6 for their digital needs.
        Experience the future of online connectivity and transactions today.
      </p>
      <div className="flex sm:flex-row flex-col items-center ml-auto mr-auto gap-3">
        <Button
          text={"Get started free"}
          styles={"bg-purple-800 text-white px-8 py-2 text-xs gap-3"}
          iright={<ArrowRight className="w-4" />}
        />
        <Button
          text={"Download App"}
          styles={"bg-white px-6 py-2 hover:bg-gray-300 gap-3 text-xs"}
          ileft={<DownloadCloud className="w-4" />}
          onClick={() => {
            setView(true);
          }}
        />
      </div>
      <hr className="border-gray-800 w-2/3 border-1 mt-10" />
      <p className="text-gray-400">
        Need help getting started? Our team is here to assist you.
      </p>
      <Button
        text={"Contact Support"}
        styles={"bg-white px-8 py-2 hover:bg-gray-400 text-black text-xs gap-3"}
        ileft={<Mail className="w-4" />}
        onClick={() => {
          Navigate("/support");
        }}
      />

      {view && (
        <DownloadSection
          onClick={() => {
            setView(false);
          }}
        />
      )}
    </section>
  );
}
export default CTA;
