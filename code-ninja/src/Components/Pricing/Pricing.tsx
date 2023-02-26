export default function Pricing() {
  return (
    <section className="box-border py-8 leading-7 text-gray-900 bg-primary border-0  border-solid sm:py-12 md:py-16 lg:py-24 tails-selected-element">
      <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900">
          <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-textprimary border-solid sm:text-4xl md:text-5xl">
            Pricing Options
          </h2>
          <p className="box-border mt-4 text-2xl leading-normal text-textprimary border-solid">
            Each feature costs 1 credit to use , and our credit pricing is as
            follows&nbsp;
          </p>
        </div>
        <div
          className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4  border-primary rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3"
          data-primary="blue-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border px-4 py-8 mb-6 text-center bg-primary border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"></div>
          <div className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-primary border-0 border-solid sm:text-3xl md:text-4xl">
              Starter
            </h3>
            <p className="mt-3 leading-7 text-primary border-0 border-solid">
              The started plan is a good way to get a taste of our features
            </p>
            <div className="flex items-center justify-center mt-6 leading-7 text-primary border-0 border-solid sm:mt-8">
              <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-primary">
                $5
              </p>
              <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200"></p>
            </div>
            <button
              className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-accentblue order-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg"
              data-primary="blue-600"
              data-rounded="rounded-md"
            >
              100 Credit's
            </button>
          </div>
          <div className="box-border px-4 py-8 text-center bg-primary border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"></div>
        </div>
      </div>
    </section>
  );
}
