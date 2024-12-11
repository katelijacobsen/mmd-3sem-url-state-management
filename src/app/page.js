"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const page = () => {
  const sizes = ["sx", "s", "m", "l", "xl"];
  const colors = ["White", "Black&White", "Gray"];
  const searchParams = useSearchParams();

  const selectedSize = searchParams.get("size");
  const selectedColor = searchParams.get("color");
  const selectedQuantity = searchParams.get("quantity") || "1"; // Default quantity is 1

  const btnState = () => {
    if (!selectedSize) return { text: "Choose Size", active: false };
    if (!selectedColor) return { text: "Choose Color", active: false };
    return { text: "Add to Cart", active: true };
  };

  const getBtnState = btnState();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl p-8">
        <form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8">
          <div className="md:col-span-1 lg:col-span-5">
            <div className="aspect-square overflow-hidden bg-neutral-50">
              <Image
                alt="T-shirt"
                width={500}
                height={500}
                className="h-full w-full object-contain object-center"
                src="/tshirt.png"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
            <div>
              <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
                Bare en t-shirt
              </h1>
              <p className="mb-8 text-sm">kr. 90.00</p>
              <fieldset className="my-4">
                <legend className="sr-only">Sizes</legend>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size, index) => (
                    <Link
                      key={index}
                      className={`${searchParams.get("size") === size && "bg-neutral-100"} border-neutral-200 text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center rounded border p-3 text-center text-sm font-semibold`}
                      href={`?${createQueryString("size", size)}`}
                    >
                      {size}
                    </Link>
                  ))}
                </div>
              </fieldset>
              <fieldset className="my-4">
                <legend className="sr-only">Colors</legend>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color, index) => (
                    <Link
                      key={index}
                      className={`${searchParams.get("color") === color && "bg-neutral-100"} border-neutral-200 text-neutral-900 hover:bg-neutral-100 relative flex min-w-[5ch] items-center justify-center rounded border p-3 text-center text-sm font-semibold`}
                      href={`?${createQueryString("color", color)}`}
                    >
                      {color}
                    </Link>
                  ))}
                </div>
              </fieldset>
              <div className="my-4">
                <label className="block text-sm font-medium text-neutral-900">
                  Quantity
                </label>
                <select
                  value={selectedQuantity}
                  onChange={(e) =>
                    window.location.href = `?${createQueryString("quantity", e.target.value)}`
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-8">
                {getBtnState.active ? (
                  <Link
                    href={`/payment?${new URLSearchParams({
                      size: selectedSize,
                      color: selectedColor,
                      quantity: selectedQuantity,
                    }).toString()}`}
                    className="h-12 flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-neutral-800"
                  >
                    {getBtnState.text}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="h-12 flex items-center justify-center rounded-md bg-gray-300 px-6 py-3 text-base font-medium leading-6 text-white shadow cursor-not-allowed"
                  >
                    {getBtnState.text}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
