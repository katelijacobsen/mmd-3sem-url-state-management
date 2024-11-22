import Image from "next/image";
import {use} from "react";
const page = async ({searchParams}) => {
  //const  queryParams = await searchParams;
  //const {size, color} = await searchParams;

  const { color, size } = await searchParams;

  //const { color, size } = use(searchParams);

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl p-8">
        <h1 className="mt-8 text-3xl font-bold text-neutral-900">
          Your Shopping Cart
        </h1>
        <form className="mt-12">
          <ul
            role="list"
            className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
          >
            <li className="flex py-4">
              <div className="aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                <Image
                  alt="T-shirt"
                  width={500}
                  height={500}
                  className="h-full w-full object-contain object-center"
                  src="/tshirt.png"
                  priority
                />
              </div>
              <div className="relative flex flex-1 flex-col justify-between p-4 py-2">
                <div className="flex justify-between justify-items-start gap-4">
                  <div>
                    <h2 className="font-medium text-neutral-700">Size:</h2>
                    <p className="text-sm text-neutral-500">{searchParams.size}</p>
                    <h2 className="mt-1 font-medium text-neutral-700">
                      Color:
                    </h2>
                    <p className="text-sm text-neutral-500">{searchParams.color}</p>
                  </div>
                  <p className="text-right font-semibold text-neutral-900">
                    kr. 90.00
                  </p>
                </div>
                <div className="flex justify-between"></div>
              </div>
            </li>
          </ul>
          <div className="mt-12">
            <div className="mt-10 text-center">
              <button className="rounded border border-transparent bg-neutral-900 px-6 py-3 text-center font-medium text-neutral-50 hover:bg-neutral-800 w-full">
                Checkout
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
