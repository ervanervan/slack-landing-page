import React from "react";
import { footerBottomLinks, footerLinks } from "../data/footerLinks";
import logoFooter from "../assets/images/footer-logo.svg";
import GlobeIcon from "../assets/icons/GlobeIcon";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import DownloadIcon from "../assets/icons/DownloadIcon";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Bagian atas: Navigasi */}
      <div className="bg-custom-purple text-custom-white py-10 px-4 lg:px-0 border-b-2 border-black">
        <div className="max-w-[980px] mx-auto flex flex-col lg:flex-row gap-y-8 items-start justify-between">
          <div>
            <img src={logoFooter} alt="Logo" className="size-14 -mt-1" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-11 text-sm">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="w-40 md:w-full lg:w-[140px]">
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
        <div className="max-w-[980px] mx-auto px-4 flex flex-col lg:flex-row gap-6 justify-between items-center text-xs">
          {/* Kiri: Link */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-semibold items-center justify-center">
            {footerBottomLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:underline">
                  {link.isDropdown ? (
                    <div className="flex items-center space-x-1">
                      <GlobeIcon />
                      <span>{link.name}</span>
                      <ChevronDownIcon />
                    </div>
                  ) : (
                    link.name
                  )}
                </a>
              </li>
            ))}
          </ul>
          {/* Kanan: Media Sosial */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button icon={<DownloadIcon />} variant="white">
              Download Slack
            </Button>
            <div className="flex items-center space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
