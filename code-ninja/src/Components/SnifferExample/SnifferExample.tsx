import img from "../../Assets/Images/demoSnifferImg.png";

export default function SnifferExample() {
  return (
    <section className="px-2 py-30 bg-primary md:px-0 tails-selected-element">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-5">
          <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-2xl  tracking-normal text-textsecondary sm:text-2xl md:text-2xl lg:text-2xl md:tracking-tight">
            Look , an example of our new code sniffer
          </h1>
        </div>
        <div className="flex flex-wrap items-center sm:-mx-5">
          <div className="w-full md:w-full">
            <div
              className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              <img src={img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
