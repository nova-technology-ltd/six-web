import { CheckCircle } from "lucide-react";

function Shadow() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-10 bg-linear-to-t from-gray-200  via-gray-100 to-gray-400 p-10 py-20">
      <span className="flex items-center gap-3">
        <CheckCircle className="w-6 text-green-400" /> Secure & Reliable
      </span>
      <span className="flex items-center gap-3">
        <CheckCircle className="w-6 text-green-400" /> 24/7 Support
      </span>
      <span className="flex items-center gap-3">
        <CheckCircle className="w-6 text-green-400" /> Instant Transactions
      </span>
    </section>
  );
}
export default Shadow;
