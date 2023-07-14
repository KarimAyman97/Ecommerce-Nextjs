import { LandingButton } from "./landing-btn";

export const LandingSection: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between align-center mt-16 md:mt-24 relative">
        <div className=" text-center md:w-1/2  md:text-left">
          <p className=" text-warm-gray-800 font-bold uppercase text-xl md:text-4xl font-montserrat md:ml-2 ">
            BUY ANYTHING
          </p>
          <p className=" mt-3 font-bold text-3xl md:text-6xl  lg:text-7xl  font-montserrat  ">
            <span className="capitalize">All</span> you need to complete your
            kitchen.
          </p>
          <div className="mt-4">
            <LandingButton />
          </div>
        </div>
      </div>
    </section>
  );
};
