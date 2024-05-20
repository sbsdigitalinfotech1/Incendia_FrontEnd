import Image from "next/image";
import React from "react";
import logo from "@/assets/images/incendiaLogo.png";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const footerContent = {
    shop: [
      {
        title: "Ladies",
        link: "/",
      },
      {
        title: "Mens",
        link: "/",
      },
      {
        title: "Babies",
        link: "/",
      },
      {
        title: "Kids",
        link: "/",
      },
      {
        title: "Sports",
        link: "/",
      },
      {
        title: "Magazine",
        link: "/",
      },
    ],
    corpInfo: [
      {
        title: "Career",
        link: "/",
      },
      {
        title: "About",
        link: "/",
      },
      {
        title: "Press release",
        link: "/",
      },
      {
        title: "Invastor relation",
        link: "/",
      },
    ],

    help: [
      {
        title: "Customer Service",
        link: "/",
      },
      {
        title: "Find a store",
        link: "/",
      },
      
      {
        title: "Contact",
        link: "/",
      },
      {
        title: "Report a scam",
        link: "/",
      },
      {
        title: "Privacy & Policy",
        link: "/privacyPolicy",
      },
    ],
    sideText: `Sign up now and be the first to know about exclusive offers,
    latest fashion news & style tips!`,
    CopyrightContent: `The content of this site is copyright-protected and is the
    property of H & M Hennes & Mauritz AB.`,

    socialMedia: [
      {
        title: "fb",
        link: "/",
      },
      {
        title: "insta",
        link: "/",
      },
      {
        title: "tiktok",
        link: "/",
      },
      {
        title: "pintrest",
        link: "/",
      },
      {
        title: "yt",
        link: "/",
      },
    ],
  };

  return (
    <footer className="py-8 px-8">
      <div className="lg:mx-40">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-7">
          <div className="w-100">
            <h3 className="text-medium font-semibold mb-4 ">SHOP</h3>
            <ul>
              {footerContent.shop.map((item,i) => (
                <Link href={item.link} key={i}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-medium font-semibold mb-4 ">CORPORATE INFO</h3>
            <ul>
              {footerContent.corpInfo.map((item,i) => (
                <Link href={item.link} key={i}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-medium font-semibold mb-4 ">HELP</h3>
            <ul>
              {footerContent.help.map((item,i) => (
                <Link href={item.link} key={i}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <section>
            <p>{footerContent?.sideText}</p>
            <br></br>
            <a href="#">Read more →</a>
          </section>
        </div>
        <div className="flex flex-col sm:grid-cols-2 items-center justify-center mt-10">
          <ul className="flex gap-4 ">
            {footerContent.socialMedia.map((item,i) => (
              <>
                {item.title=='insta'&&<Link href={item.link} key={i}>
                  <FaInstagram size={24} />
                </Link>}
                {item.title=='fb'&&<Link href={item.link} key={i}>
                  <FaFacebook size={24} />
                </Link>}
                {item.title=='yt'&&<Link href={item.link} key={i}>
                  <FaYoutube size={24} />
                </Link>}
                {item.title=='pintrest'&&<Link href={item.link} key={i}>
                  <FaPinterest size={24} />
                </Link>}
                {item.title=='tiktok'&&<Link href={item.link} key={i}>
                  <FaTiktok size={24} />
                </Link>}
              </>
            ))}
          </ul>
          <div className="mt-4 text-sm">
            <p>{footerContent?.CopyrightContent}</p>
          </div>
          <div>
            <Link href="#">
              <Image className="mt-8" src={logo} width={150} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
