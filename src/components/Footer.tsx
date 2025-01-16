import React from "react";
import { footerLinks } from "../data/footerLinks";
import logoFooter from "../assets/images/footer-logo.svg";
import GlobeIcon from "../assets/icons/GlobeIcon";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import DownloadIcon from "../assets/icons/DownloadIcon";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Bagian atas: Navigasi */}
      <div className="bg-custom-purple text-custom-white py-10 px-4 lg:px-0">
        <div className="max-w-[980px] mx-auto flex flex-col lg:flex-row gap-y-8 items-start justify-between">
          <div>
            <img src={logoFooter} alt="Logo" className="size-14 -mt-1" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-11 text-sm">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="w-40 lg:w-[140px]">
                <h3 className="font-bold mb-4 text-sm uppercase">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="bg-yellow-500 text-black py-6">
        <div className="max-w-[980px] mx-auto px-4 flex flex-col md:flex-row gap-6 justify-between items-center text-xs">
          {/* Kiri: Link */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-semibold items-center justify-center">
            <li>
              <a href="#" className="hover:underline">
                Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <div className="flex items-center space-x-1">
                  <GlobeIcon />
                  <span>Change Region</span>
                  <ChevronDownIcon />
                </div>
              </a>
            </li>
          </ul>
          {/* Kanan: Media Sosial */}
          <div className="flex space-x-4 items-center">
            <a
              href="#"
              className="group relative border-2 border-black px-2 py-1.5 rounded-full group bg-custom-white hover:text-white transition-colors duration-200 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-2">
                <DownloadIcon className="w-5 h-5 text-black transition-colors duration-200 group-hover:text-white" />
                <span className="text-black font-semibold text-xs">
                  Download Slack
                </span>
              </div>
            </a>

            <a href="#">
              <TwitterIcon className="size-5" />
            </a>
            <a href="#">
              <FacebookIcon className="size-5" />
            </a>
            <a href="#">
              <YoutubeIcon className="size-5" />
            </a>
            <a href="#">
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
