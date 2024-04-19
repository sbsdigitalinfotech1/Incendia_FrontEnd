import ProductRow from "@/components/ProductRow/ProductRow";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/navy_blue_plain_t-shirt_side_view_03_03_2023_03_03_2023_400x533.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/full_sleeves_new_update_images/plain_burgundy_full_sleeves_t-shirt_base_08_03_2023_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/classic_white_polo_t-shirt_base_31_1_2023_19_05_2023_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/take_the_road_less_travelled_t-shirt_for_men_base_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },

    // More products...
  ];

  const products2 = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/aalas_se_majboor_half_sleeve_t-shirt_for_men_base_400x533.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/airplane_mode_on_t-shirts_for_men_base_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/smoky_green_melange_full_sleeves_t_shirt30_11_2022_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/pitch_black_mock_neck_full_sleeves_t-shirt_base_09_02_2024_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      strikePrice: "355",
      offPrice: "50",
      color: "Black",
    },
  ];

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <>
      {/* hero section  */}
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-5 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn&apos;t care if you live or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product list  */}
      <ProductRow products={products} title="Top selling" />
      <ProductRow products={products2} title="Customers also purchased" />
    </>
    // </main>
  );
}
