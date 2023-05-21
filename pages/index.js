import Image from "next/image";
import SedanImg from "../images/icon-sedans.svg";
import SuvImg from "../images/icon-suvs.svg";
import LuxuryImg from "../images/icon-luxury.svg";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Three Column Preview Card Component</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
      </Head>
      <main className="flex flex-col md:h-screen bg-very-light-gray justify-center items-center text-very-light-gray">
        <div className="container md:max-w-5xl px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 md:h-[52vh]">
            {/* Sedans Section */}
            <section className="bg-bright-orange p-12 space-y-8 flex flex-col justify-between rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg">
              <div className="space-y-8">
                <div className="relative w-16 h-12">
                  <Image
                    src={SedanImg}
                    alt="Sedam Image"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-big-shoulders-display text-5xl">SEDANS</h2>
                <p className="text-[15px] font-lexend-deca text-transparent-white leading-relaxed">
                  Choose a sedan for its affordability and excellent fuel
                  economy. Ideal for cruising in the city or on your next road
                  trip.
                </p>
              </div>

              <div>
                <button className="bg-very-light-gray rounded-3xl px-7 py-3 text-[15px] text-bright-orange font-lexend-deca hover:bg-bright-orange hover:text-very-light-gray border-2">
                  Learn More
                </button>
              </div>
            </section>
            {/* SUVs Section */}
            <section className="bg-dark-cyan p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="relative w-16 h-12">
                  <Image
                    src={SuvImg}
                    alt="Sedam Image"
                    fill
                    className="object-contain"
                  ></Image>
                </div>

                <h2 className="font-big-shoulders-display text-5xl">SUVS</h2>
                <p className="text-[15px] font-lexend-deca text-transparent-white leading-relaxed">
                  Take an SUV for its spacious interior, power, and versatility.
                  Perfect for your next family vacation and off-road adventures.
                </p>
              </div>

              <div>
                <button className="bg-very-light-gray rounded-3xl px-7 py-3 text-[15px] text-dark-cyan font-lexend-deca hover:bg-dark-cyan hover:text-very-light-gray border-2">
                  Learn More
                </button>
              </div>
            </section>
            {/* Luxury Section */}
            <section className="bg-very-dark-cyan p-12 space-y-8 flex flex-col justify-between rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg">
              <div className="space-y-8">
                <div className="relative w-16 h-12">
                  <Image
                    src={LuxuryImg}
                    alt="Sedam Image"
                    fill
                    className="object-contain"
                  ></Image>
                </div>

                <h2 className="font-big-shoulders-display text-5xl">LUXURY</h2>
                <p className="text-[15px] font-lexend-deca text-transparent-white leading-relaxed">
                  Cruise in the best car brands without the bloated prices.
                  Enjoy the enhanced comfort of a luxury rental and arrive in
                  style.
                </p>
              </div>

              <div>
                <button className="bg-very-light-gray rounded-3xl px-7 py-3 text-[15px] text-very-dark-cyan font-lexend-deca hover:bg-very-dark-cyan hover:text-very-light-gray border-2">
                  Learn More
                </button>
              </div>
            </section>
          </div>
        </div>
        <footer className="font-sm text-black flex justify-center w-full py-2 text-[15px]">
          <span>
            Challenge by{" "}
            <Link
              href="https://www.frontendmentor.io?ref=challenge"
              className="text-attribution underline"
              target="_blank"
            >
              Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link
              href="https://www.frontendmentor.io/profile/hariperisetla"
              className="text-attribution underline"
              target="_blank"
            >
              Hari Perisetla
            </Link>
            .
          </span>
        </footer>
      </main>
    </>
  );
}
