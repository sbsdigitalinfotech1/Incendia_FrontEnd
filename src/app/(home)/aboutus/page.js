import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="mx-auto px-5 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 p-0">
      <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1  gap-2">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="image"
            fill
            className="object-contain h-0"
          />
        </div>
        <div className="text-gray-500 ">
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
          <p className="mb-4">
            We value transparency, honesty, and integrity in all our
            interactions. Your satisfaction is our top priority, and we are
            committed to continuously improving and evolving to meet your needs.
          </p>
          <p>
            Thank you for choosing XYZ Store for your online shopping needs. We
            appreciate your support and look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
