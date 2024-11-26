import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    // <section className="h-screen flex items-center justify-between px-8 sm:px-16">
    //   {/* Left Section */}
    //   <div className="text-left max-w-xl space-y-6">
    //     <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
    //       Welcome to My Portfolio
    //     </h1>
    //     <p className="text-white text-base sm:text-lg font-light max-w-md">
    //       I am a passionate developer specializing in creating beautiful and
    //       functional web applications.
    //     </p>
    //     {/* Button with Navigation */}
    //     <Link href="/learn-more">
    //       <button className="bg-white text-blue-600 px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-gray-200 transition ease-in-out duration-200">
    //         View My Work
    //       </button>
    //     </Link>
    //   </div>

    //   {/* Right Section - Image */}
    //   <div className="hidden lg:block">
    //     <img
    //       src="/portfolio-image.jpg"
    //       alt="Portfolio illustration"
    //       className="w-[450px] h-[450px] object-contain"
    //     />
    //   </div>
    // </section>
    // <div className="text-center">
    //   <div className="flex justify-center mb-16">
    //     <Image src="/images/logo1.svg" alt="Logo" width={200} height={80} />
    //   </div>
    //   <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
    //     Chimezie Ajogwu
    //   </h6>
    //   <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
    //     Senior Backend Developer
    //   </h1>
    //   <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
    //     I have a passion for software. I enjoy creating tools that make life
    //     easier for people.
    //   </p>
    //   <a
    //     href="#"
    //     className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
    //   >
    //     Hire me
    //   </a>
    // </div>
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(/images/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat" />
        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src="/images/blog-author.jpg"
                className="h-48 rounded-full sm:h-56"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Chimezie Ajogwu!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow" />
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  {/* <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow" />
                  </a> */}
                  <Link href="/" className="pl-4">
                    {/* <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" /> */}
                    <img
                      src="/icons/facebook.svg"
                      alt="facebook"
                      className="svg-icon"
                    />
                  </Link>
                  <Link href="/" className="pl-4">
                    {/* <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" /> */}
                    <img
                      src="/icons/youtube.svg"
                      alt="youtube"
                      className="svg-icon"
                    />
                  </Link>
                  <Link href="/" className="pl-4">
                    {/* <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" /> */}
                    <img
                      src="/icons/twitter.svg"
                      alt="twitter"
                      className="svg-icon"
                    />
                  </Link>
                  <Link href="/" className="pl-4">
                    {/* <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" /> */}
                    <img
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      className="svg-icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
