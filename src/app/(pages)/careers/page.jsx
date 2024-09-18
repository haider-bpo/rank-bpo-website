import React from "react";
// import bgImage from '/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg'

function CareersPage() {
  return (
    <>
      <div>
        <div
          className="relative bg-black bg-center bg-no-repeat bg-cover h-screen"
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"
            style={{
              backgroundImage: `url(/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg)`,
            }}
          ></div>
          <div className="relative z-10 p-10 w-[80vw] ps-[8vw] text-start pt-[40vh]">
            <h1
              data-aos="fade-down"
              className="text-white mt-32 text-2xl md:text-5xl font-bold mb-4"
            >
              We&apos;re looking for you!
            </h1>

            <p className="text-blue-600 ps-4"> - jobs & internships at Rank</p>

            <div
              data-aos="fade-up"
              className="flex justify-start max-w-sm ps-2 text-white mt-1 text-md font_barlow font-semibold text-opacity-85"
            >
              <div className="flex gap-2 items-center">
                Rank BPO is expanding progressively, and as a result we’re
                always on the lookout for new talent to join our dynamic
                projects.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default CareersPage;
