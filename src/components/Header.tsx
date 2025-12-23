import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import logo from "@/assets/logo new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to projects with search query
      window.location.href = `/projects?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_0_calc(1.125*16px)_rgba(0,0,0,0.15)]" : ""
      }`}
      style={{ height: "72px" }}
    >
      <div className="h-full px-6 md:px-[calc(18vw-10rem)]">
        <div className="flex items-center justify-between h-full max-w-[138rem] mx-auto">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="logo-wrapper h-16 w-20 md:h-20 md:w-24">
              <img 
                src={logo} 
                alt="Design Nation" 
                className="logo-image h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[1.6rem] font-semibold tracking-wide text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[1.6rem] font-semibold tracking-wide text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
              About
            </Link>
            <Link to="/services" className="text-[1.6rem] font-semibold tracking-wide text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-[1.6rem] font-semibold tracking-wide text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-[1.6rem] font-semibold tracking-wide text-[#1e3a8a] hover:text-[#1e40af] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="w-[200px] md:w-[250px] h-10 px-4 pr-10 text-[1.4rem] border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 rounded-full border border-[#1e3a8a] flex items-center justify-center hover:bg-[#1e3a8a]/10 transition-colors"
                  aria-label="Open search"
                >
                  <Search className="w-4 h-4 text-[#1e3a8a]" />
                </button>
              )}
            </div>
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden flex items-center gap-2 p-2 text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Open menu"
                >
                  <span className="text-[18px] font-medium leading-none">Menu</span>
                  <div className="w-12 flex flex-col gap-[7px] items-center justify-center mt-[5px]">
                    <span className="w-[20px] h-[2px] bg-current block"></span>
                    <span className="w-[20px] h-[2px] bg-current block"></span>
                  </div>
                </button>
              </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] p-0 flex flex-col h-full bg-background"
            >
              {/* Header with Close */}
              <div className="flex items-center justify-end px-6 md:px-[9.09091vw] lg:px-52 py-6">
                <SheetClose asChild>
                  <button className="text-[1.6rem] text-foreground hover:opacity-60 transition-opacity">
                    Close
                  </button>
                </SheetClose>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col justify-between h-full px-6 md:px-[9.09091vw] lg:px-52 pb-[40px] md:pb-[56px]">
                <div className="flex flex-[0_1_100%] flex-col justify-between pt-28 md:pt-32 lg:pt-28 xl:pt-48 text-right">
                  {/* Main Links */}
                  <ul className="space-y-2">
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/"
                          className="text-[3.2rem] inline-block font-semibold hover:text-primary transition-colors"
                        >
                          Home
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/about"
                          className="text-[3.2rem] inline-block font-semibold hover:text-primary transition-colors"
                        >
                          About
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/services"
                          className="text-[3.2rem] inline-block font-semibold hover:text-primary transition-colors"
                        >
                          Services
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/projects"
                          className="text-[3.2rem] inline-block font-semibold hover:text-primary transition-colors"
                        >
                          Projects
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link
                          to="/contact"
                          className="text-[3.2rem] inline-block font-semibold hover:text-primary transition-colors"
                        >
                          Contact
                        </Link>
                      </SheetClose>
                    </li>
                  </ul>

                  {/* Secondary Links */}
                  <ul className="space-y-1 mt-12">
                    <li>
                      <a
                        href="mailto:designation.interio@gmail.com"
                        className="text-[1.6rem] inline-block hover:text-primary transition-colors"
                      >
                        designation.interio@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+918417831886"
                        className="text-[1.6rem] inline-block hover:text-primary transition-colors"
                      >
                        +91-8417831886
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
