import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t border-border mt-24">
      <div className="py-16 px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-16">
            <div className="lg:max-w-[40rem]">
              <h3 className="text-[2.4rem] font-bold mb-2">Design Nation</h3>
              <p className="text-[1.4rem] text-muted-foreground italic mb-4">Your Space Story</p>
              <p className="text-[1.6rem] text-muted-foreground leading-[1.8]">
                Transforming spaces into stories through thoughtful design and exceptional craftsmanship.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[1.4rem] tracking-wider mb-1">
                Select a color scheme preference
              </h4>
              <div className="flex gap-6">
                <button
                  onClick={() => setTheme("light")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "light"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="Light mode"
                >
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "dark"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="Dark mode"
                >
                  Dark
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "system"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="System theme"
                >
                  Auto
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Navigation */}
            <nav className="flex flex-col gap-3">
              <h4 className="text-[1.4rem] font-semibold tracking-wider uppercase mb-2">Navigation</h4>
              <Link to="/" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Services */}
            <nav className="flex flex-col gap-3">
              <h4 className="text-[1.4rem] font-semibold tracking-wider uppercase mb-2">Services</h4>
              <Link to="/services" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Residential Design
              </Link>
              <Link to="/services" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Commercial Design
              </Link>
              <Link to="/services" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Architectural Design
              </Link>
              <Link to="/services" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Turnkey Projects
              </Link>
            </nav>

            {/* Contact */}
            <nav className="flex flex-col gap-3">
              <h4 className="text-[1.4rem] font-semibold tracking-wider uppercase mb-2">Contact</h4>
              <a href="mailto:designation.interio@gmail.com" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                designation.interio@gmail.com
              </a>
              <a href="tel:+918417831886" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                +91-8417831886
              </a>
              <p className="text-[1.4rem] text-muted-foreground">
                Gomti Nagar, Lucknow
              </p>
            </nav>

            {/* Social */}
            <nav className="flex flex-col gap-3">
              <h4 className="text-[1.4rem] font-semibold tracking-wider uppercase mb-2">Follow Us</h4>
              <a
                href="https://www.instagram.com/design_nation___?igsh=Mjc0N3lubGoyMng5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/17obAX6GWA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[1.4rem] text-muted-foreground">
              © Design Nation 2025. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[1.4rem] text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
