import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="WEBBER Home and Business" className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:5515021052" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
              <Phone className="w-4 h-4" />
              551-502-1052
            </a>
            <a
              href="https://www.instagram.com/webberhb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} WEBBER Home and Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
