import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const GetQuoteButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-24 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Get a Quote"
    >
      <FileText className="w-5 h-5" />
      <span className="text-[1.4rem] font-semibold">Get a Quote</span>
    </Link>
  );
};

export default GetQuoteButton;
