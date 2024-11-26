import React from "react";

const Skills = () => {
  return (
    // <section className="py-10 md:py-16">
    //   <div className="container max-w-screen-xl mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       <div className="bg-gray-50 px-8 py-10 rounded-md">
    //         <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
    //           <i data-feather="activity" />
    //         </div>
    //         <h4 className="font-medium text-gray-700 text-lg mb-4">
    //           High experience
    //         </h4>
    //         <p className="font-normal text-gray-500 text-md">
    //           Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
    //           sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
    //           aliqua.
    //         </p>
    //       </div>
    //       <div className="bg-gray-50 px-8 py-10 rounded-md">
    //         <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
    //           <i data-feather="codesandbox" />
    //         </div>
    //         <h4 className="font-medium text-gray-700 text-lg mb-4">
    //           Useful sandboxes
    //         </h4>
    //         <p className="font-normal text-gray-500 text-md">
    //           Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
    //           sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
    //           aliqua.
    //         </p>
    //       </div>
    //       <div className="bg-gray-50 px-8 py-10 rounded-md">
    //         <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
    //           <i data-feather="coffee" />
    //         </div>
    //         <h4 className="font-medium text-gray-700 text-lg mb-4">
    //           Success side projects
    //         </h4>
    //         <p className="font-normal text-gray-500 text-md">
    //           Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
    //           sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
    //           aliqua.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <div className="bg-grey-50" id="about">
    //   <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    //     <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
    //       <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
    //         Who am I?
    //       </h2>
    //       <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
    //         I'm Christy Smith, a Web Designer &amp; Photographer
    //       </h4>
    //       <p className="pt-6 font-body leading-relaxed text-grey-20">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </p>
    //       <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
    //         <div className="flex items-center justify-center sm:justify-start">
    //           <p className="font-body text-lg font-semibold uppercase text-grey-20">
    //             Connect with me
    //           </p>
    //           <div className="hidden sm:block">
    //             <i className="bx bx-chevron-right text-2xl text-primary" />
    //           </div>
    //         </div>
    //         <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
    //           <a href="/">
    //             <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow" />
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow" />
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow" />
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
    //           </a>
    //           <a href="/" className="pl-4">
    //             <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
    //       <div>
    //         <div className="flex items-end justify-between">
    //           <h4 className="font-body font-semibold uppercase text-black">
    //             HTML &amp; CSS
    //           </h4>
    //           <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
    //         </div>
    //         <div className="mt-2 h-3 w-full rounded-full bg-lila">
    //           <div
    //             className="h-3 rounded-full bg-primary"
    //             style={{ width: "85%" }}
    //           />
    //         </div>
    //       </div>
    //       <div className="pt-6">
    //         <div className="flex items-end justify-between">
    //           <h4 className="font-body font-semibold uppercase text-black">
    //             Python
    //           </h4>
    //           <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
    //         </div>
    //         <div className="mt-2 h-3 w-full rounded-full bg-lila">
    //           <div
    //             className="h-3 rounded-full bg-primary"
    //             style={{ width: "70%" }}
    //           />
    //         </div>
    //       </div>
    //       <div className="pt-6">
    //         <div className="flex items-end justify-between">
    //           <h4 className="font-body font-semibold uppercase text-black">
    //             Javascript
    //           </h4>
    //           <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
    //         </div>
    //         <div className="mt-2 h-3 w-full rounded-full bg-lila">
    //           <div
    //             className="h-3 rounded-full bg-primary"
    //             style={{ width: "98%" }}
    //           />
    //         </div>
    //       </div>
    //       <div className="pt-6">
    //         <div className="flex items-end justify-between">
    //           <h4 className="font-body font-semibold uppercase text-black">
    //             Figma
    //           </h4>
    //           <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
    //         </div>
    //         <div className="mt-2 h-3 w-full rounded-full bg-lila">
    //           <div
    //             className="h-3 rounded-full bg-primary"
    //             style={{ width: "91%" }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-blue-300 sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div className="group rounded px-8 py-12 shadow-md hover:bg-blue-200">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/icons/icon-development-white.svg"
                alt="development icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/icons/icon-development-black.svg"
                alt="development icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-black group-hover:text-yellow-100 lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Technical Writing
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/icon-mobile-white.svg"
                alt="Mobile Application icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/icon-mobile-black.svg"
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Mobile Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */}
        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/icon-email-white.svg"
                alt="Email Marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/icon-email-black.svg"
                alt="Email Marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Email Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */}
        <div className="group rounded px-8 py-12 shadow-md hover:bg-blue-300">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src="/icons/icon-design-white.svg" alt="Theme Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src="/icons/icon-design-black.svg" alt="Theme Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-black group-hover:text-yellow-100 lg:text-xl">
              Graphic Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-blue-500">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/icons/icon-graphics-white.svg"
                alt="Graphic Design icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/icons/icon-graphics-black.svg"
                alt="Graphic Design icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-black group-hover:text-yellow-200 lg:text-xl">
              Web Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
