"use client"

import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Page() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location and the shipping method chosen. We offer standard and expedited shipping options. Please refer to our Shipping Policy page for more information.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free return policy within 30 days of purchase. Items must be returned in their original condition. For more details, please visit our Returns & Exchanges page.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary depending on the destination. Please contact our customer support for more information.",
    },
    // Add more FAQs as needed
  ];

  const [show, setShow] = useState(new Array(faqs.length).fill(false));

  const handleClick = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  return (
    <div className="mx-auto py-6 md:py-10 bg-gray-100">
      <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-2">
        <div className=" ">
          <Image
           removeWrapper
           quality={75}
           radius="none"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="image"
            className="h-4/5 w-full object-cover object-center rounded-r-3xl z-0"
          />
        </div>
        <div className="md:w-3/4 w-full px-6 mb-3">
          <h2 className="text-3xl font-bold mb-4 text-black">About Us</h2>
          <p className="mb-4">
            Welcome to our ecommerce website! At XYZ Store, we strive to provide
            our customers with the best shopping experience possible. Our
            mission is to offer high-quality products at affordable prices while
            delivering exceptional customer service.
          </p>
          <p className="mb-4">
            Our team consists of passionate individuals dedicated to curating a
            diverse selection of products that cater to various needs and
            interests. Whether you are shopping for electronics, fashion, home
            goods, or gifts, we have got you covered.
          </p>
          <p>
            Thank you for choosing XYZ Store for your online shopping needs. We
            appreciate your support and look forward to serving you!
          </p>
        </div>
      </div>
      <div className="md:px-24 px-6 flex items-center justify-center ">
        <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4 ">
          <div className="p-4 rounded-md shadow-sm bg-gray-300 ">
            <h3 className="font-bold text-xl ">1. Our Story</h3>
            <p className="text-sm max-w-3/4 mt-3 ">
              Our team consists of passionate individuals dedicated to curating
              a diverse selection of products that cater to various needs and
              interests. Whether you are shopping
              <br />
              Thank you for choosing XYZ Store for your online shopping needs.
              We appreciate your support and look forward to serving you!
            </p>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-gray-300 ">
            <h3 className="font-bold text-xl ">2. Our Mission</h3>
            <p className="text-sm max-w-3/4 mt-3 ">
              Our team consists of passionate individuals dedicated to curating
              a diverse selection of products that cater to various needs and
              interests. Whether you are shopping
            </p>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-gray-300 ">
            <h3 className="font-bold text-xl ">3. Why To Choose Us</h3>
            <p className="text-sm max-w-3/4 mt-3 ">
              Our team consists of passionate individuals dedicated to curating
              a diverse selection of products that cater to various needs and
              interests. Whether you are shopping
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-24 mt-12 ">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-2 p-5 rounded-md">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleClick(index)} >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <FaChevronDown size={18} className={show[index] ? "rotate-180 transition-transform duration-300" : "transition-transform duration-75"} />
            </div>

            {show[index] && <p>{faq.answer}</p>}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
