"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductRowFilter from "../ProductRowFilter/ProductRowFilter";
import Pagination from "@/components/Pagination/PaginationUI";
import { Skeleton } from "@nextui-org/react";
import {
  getAvailableColorsAndSizes,
  getCategory,
  getProductsFiltered,
} from "@/config/Api";
import toast from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import noMatchFound from "@/assets/images/noMatchFound";

const sortOptions = [
  { name: "Newest", value: "new", current: false },
  { name: "Price: Low to High", value: "lth", current: false },
  { name: "Price: High to Low", value: "htl", current: false },
];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductFilter({
  products,
  loading,
  count,
  page,
  pageSize,
  setPage,
  setSort,
  setSize,
  setCategoryId,
  setColorName,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const lottieRef = useRef(null);
  const [filters, setFilters] = useState([
    // {
    //   id: "color",
    //   name: "Color",
    //   options: [
    //     {
    //       value: "white",
    //       label: "White",
    //       checked: false,
    //       colorCode: "#FFFFFF",
    //     },
    //   ],
    // },
    // {
    //   id: "category",
    //   name: "Category",
    //   options: [{ value: "purple", label: "Purple", checked: false }],
    // },
    // {
    //   id: "size",
    //   name: "Size",
    //   options: [
    //     { value: "2l", label: "2L", checked: false },
    //     { value: "6l", label: "6L", checked: false },
    //     { value: "12l", label: "12L", checked: false },
    //     { value: "18l", label: "18L", checked: false },
    //     { value: "20l", label: "20L", checked: false },
    //     { value: "40l", label: "40L", checked: true },
    //   ],
    // },
  ]);

  const getData = async () => {
    try {
      const resCategory = await getCategory();
      const resSize = await getAvailableColorsAndSizes();
      if (resSize.data.success && resCategory.data.success) {
        setFilters([
          ...filters,
          {
            id: "category",
            name: "Category",
            options: [
              { value: "all", label: " Show All", checked: true },
              ...resCategory.data.data.rows.map((category) => ({
              value: category.id,
              label: category.name,
              checked: false,
            }))
          ]
          },
          {
            id: "size",
            name: "Size",
            options: [
              { value: "all", label: " Show All", checked: true },
              ...resSize.data.data.sizes.map((item) => ({
              value: item,
              label: item,
              checked: false,
            }))
          ],
          },
          {
            id: "color",
            name: "Color",
            options:resSize.data.data.colors.map((category) => ({
              value: category.colorName,
              label: category.colorName,
              checked: false,
              colorCode: category.color,
            }))
          },
        ]);
      }
    } catch (err) {
      toast.dismiss();
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect = async (selected) => {
    setSort(selected.value);
    setPage(1);
  };

  const handleSelectSize = async (selected) => {
    if(selected == "all"){
      setSize();
      setPage(1);
    }
    else{
    setSize(selected);
    setPage(1);
    }
  };

  const handleSelectCategory = async (selected) => {
    if(selected == "all"){
      setCategoryId("");
      setPage(1);
    }
    else{
    setCategoryId(selected);
    setPage(1);
  }
  };

  const handleSelectColor = async (selected) => {
    setColorName(selected);
    setPage(1);
  };

  return (
    <>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category, i) => (
                          <li key={i}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section, i) => (
                        <Disclosure
                          as="div"
                          key={i}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.id === "color" ? (
                                    <div className="flex flex-wrap gap-2">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={optionIdx}
                                            className="relative"
                                          >
                                            <input
                                              id={`filter-desktop-${section.id}-${optionIdx}`}
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type="radio"
                                              className="sr-only"
                                              onChange={() =>
                                                handleSelectColor(option.value)
                                              }
                                            />
                                            <label
                                              htmlFor={`filter-desktop-${section.id}-${optionIdx}`}
                                              className="cursor-pointer"
                                            >
                                              <span
                                                className="inline-block h-8 w-8 rounded-full border border-gray-300"
                                                style={{
                                                  backgroundColor:
                                                    option.colorCode,
                                                }}
                                              ></span>
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  ) : (
                                    section.options.map((option, optionIdx) => (
                                      <div
                                        key={optionIdx}
                                        className="flex items-center"
                                      >
                                        <input
                                          id={`filter-desktop-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          defaultValue={option.value}
                                          type="radio"
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                          onChange={() => {
                                            section.id == "size"
                                              ? handleSelectSize(option.value)
                                              : handleSelectCategory(
                                                  option.value
                                                );
                                          }}
                                        />
                                        <label
                                          htmlFor={`filter-desktop-${section.id}-${optionIdx}`}
                                          className="ml-3 text-sm text-gray-600 cursor-pointer"
                                        >
                                          {option.label}
                                        </label>
                                      </div>
                                    ))
                                  )}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5 md:pt-24">
              <h1 className="text-xl md:text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <div
                                onClick={() => handleSelect(option)}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900 "
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm cursor-pointer"
                                )}
                              >
                                {option.name}
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>

                  {filters.map((section, i) => (
                    <Disclosure
                      as="div"
                      key={i}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.id === "color" ? (
                                <div className="flex flex-wrap gap-2">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={optionIdx} className="relative">
                                      <input
                                        id={`filter-desktop-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="sr-only"
                                        onChange={() =>
                                          handleSelectColor(option.value)
                                        }
                                      />
                                      <label
                                        htmlFor={`filter-desktop-${section.id}-${optionIdx}`}
                                        className="cursor-pointer"
                                      >
                                        <span
                                          className="inline-block h-8 w-8 rounded-full border border-gray-300"
                                          style={{
                                            backgroundColor: option.colorCode,
                                          }}
                                        ></span>
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                section.options.map((option, optionIdx) => (
                                  <div
                                    key={optionIdx}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-desktop-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="radio"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                      onChange={() => {
                                        section.id == "size"
                                          ? handleSelectSize(option.value)
                                          : handleSelectCategory(option.value);
                                      }}
                                    />
                                    <label
                                      htmlFor={`filter-desktop-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600 cursor-pointer"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))
                              )}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}

                  <ul
                    role="list"
                    className="mt-5 space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category, i) => (
                      <li key={i}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                </form>

                {/* Product grid */}

                {loading ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 md:col-span-3">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <Skeleton
                        key={index}
                        className="h-64 md:h-96 rounded-md w-full"
                      >
                        <div className="bg-default rounded-md"></div>
                      </Skeleton>
                    ))}
                  </div>
                ) : products.length > 0 ? (
                  <div className="lg:col-span-3">
                    <ProductRowFilter products={products} />
                    <div className="mt-12 flex items-center justify-end">
                      <Pagination
                        count={count}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid col-span-3 max-h-80">
                    <Player
                      ref={lottieRef}
                      autoplay
                      loop
                      src={noMatchFound}
                      style={{ height: "300px", width: "300px" }}
                    />
                    <p className="text-center text-lg font-semibold opacity-70">
                      No Match Found 🙁!
                    </p>
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
