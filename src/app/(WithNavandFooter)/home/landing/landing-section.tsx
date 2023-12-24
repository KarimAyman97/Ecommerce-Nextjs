import Image from "next/image";
import { LandingAnimation } from "./landing-animation";
import Link from "next/link";

export const LandingSection = () => {
  return (
    <section className="h-screen w-full relative" id="landing">
      <Image
        src={"/imgs/bg36.jpg"}
        alt={"background image"}
        fill={true}
        priority={true}
      />
      {/* Backdrop overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      <div className="flex flex-col md:flex-row justify-center items-center h-full relative">
        <div
          className="p-6 md:p-14"
          style={{ border: "20px solid rgba(255,255,255,.7)" }}
        >
          <div
            className="text-center p-3  md:p-10"
            style={{
              background: "rgba(255,255,255,.7)",
            }}
          >
            <p className="text-gray-900 font-bold uppercase text-4xl font-montserrat">
              BUY ANYTHING
            </p>
            <p className="mt-3  text-gray-900 font-montserrat">
              Get cooking with pro tools
            </p>
            <LandingAnimation>
              <div className="mt-4">
                <Link
                  className="border-none text-white bg-rose-400 h-[60px] w-[150px] p-3 text-bold"
                  href="/collection/best-seller"
                >
                  SHOP NOW
                </Link>
              </div>
            </LandingAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
