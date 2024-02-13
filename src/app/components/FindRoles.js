import React from "react";
import Image from "next/image";

const FindRoles = () => {
  return (
    <div className="container mt-[30px] 2m:mt-[50px]">
      <h2 className="text-[35px] 2sm:text-[40px] font-semibold leading-[48px] tracking-[-0.04em]">
        Find your next big role today.
      </h2>
      <p className="text-lg font-medium leading-[27px] tracking-normal mt-[10px]">
        Explore exciting job opportunities that match your skills and
        aspirations. From casting calls to gig opportunities, Meelance is your
        go-to platform for discovering the perfect projects that will elevate
        your career in the world of media and entertainment.
      </p>
      <h3 className="text-lg font-bold leading-[27px] tracking-normal">
        Explore popular jobs for:
      </h3>
      <div className="flex flex-col 2sm:flex-row flex-wrap gap-[20px] justify-start lg:justify-between items-start mt-[30px]">
        <div className="boxGred w-full 2sm:w-auto text-lg font-medium leading-[27px] tracking-normal rounded-lg p-[16px]">
          Actors + <br className="hidden 2sm:block"/> Other Performing Arts
        </div>
        <div className="boxGred w-full 2sm:w-auto text-lg font-medium leading-[27px] tracking-normal rounded-lg p-[16px]">
          Creative Freelancers
          <br className="hidden 2sm:block"/> + Crew
        </div>
        <div className="boxGred w-full 2sm:w-auto text-lg font-medium leading-[27px] tracking-normal rounded-lg p-[16px]">
          Influencers + <br className="hidden 2sm:block" /> Content Creators
        </div>
        <div className="boxGred w-full 2sm:w-auto text-lg font-medium leading-[27px] tracking-normal rounded-lg p-[16px]">
          Models
        </div>
        <div className="boxGred w-full 2sm:w-auto text-lg font-medium leading-[27px] tracking-normal rounded-lg p-[16px]">
          Voiceover Artists + <br className="hidden 2sm:block" /> Singers
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[20px] mt-[40px]">
        <div className="basis-[30%]">
          <Image
            src="/jobUpdate.svg"
            alt="Gallery_Animation"
            width="335"
            height="335"
            className="mr-auto"
          />
        </div>
        <div className="basis-[70%]">
          <h4 className="text-[35px] 2sm:text-[40px] font-semibold leading-[48px] tracking-[-0.04em]">Always get the latest Job updates</h4>
          <p className="text-lg font-normal leading-[30px] tracking-normal">
            Et in sapien enim congue interdum pulvinar non sed. Ac augue netus
            tellus semper.
          </p>
        </div>
      </div>
      <div className="mt-[30px] 2sm:mt-[50px]">
        <h2 className="text-[35px] 2sm:text-[40px] font-semibold leading-[48px] tracking-[-0.04em]">
          Cast your talent from millions of professionals
        </h2>
        <p className="text-lg font-medium leading-[27px] tracking-normal mt-[10px]">
          Explore exciting job opportunities that match your skills and
          aspirations. From casting calls to gig opportunities, Meelance is your
          go-to platform for discovering the perfect projects that will elevate
          your career in the world of media and entertainment.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[10px] py-[24px] px-[16px] rounded-3xl bg-[#F7EEFC] mt-[20px]">
        <div className="flex-1">
          <h3 className="text-sm font-bold leading-4 tracking-normal">
            Source your talent more efficiently
          </h3>
          <div className="flex mt-[15px] gap-[10px]">
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Accelerate your talent search
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Find and hire everyone you need in one place. You can search the
                Meelance for any type of creative talent, or post a job to have
                qualified people come directly to you.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Cut down on production costs
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Optimize your talent search by easily finding and hiring
                individuals that match your budget, streamlining the casting and
                hiring experience.
              </p>
            </div>
          </div>
          <div className="flex mt-[15px] gap-[10px]">
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Flexibility to match your workflow
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Streamline talent acquisition and effortlessly guide individuals
                through your casting and hiring procedures using adaptive
                workflow tools, allowing you to work effortlessly and in
                alignment with your preferences.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Pay talent your way
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Choose the payment method that suits your creative project
                workflow best, with the added ease of making secure payments
                directly through Meelance.
              </p>
            </div>
          </div>
          <button className="text-[10px] font-bold leading-[11px] tracking-normal bg-[#fff] rounded-md py-[10px] px-[15px] mt-[20px]">
            Post a job
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/performance.svg"
            alt="Gallery_Animation"
            width="567"
            height="318"
            className="m-auto"
          />
        </div>
      </div>
      <div className="mt-[30px] 2sm:mt-[50px]">
        <h2 className="text-[35px] lg:text-[35px] 2sm:text-[40px] font-semibold leading-[48px] tracking-[-0.04em]">
          Represent your talent on the industry’s most vast marketplace for
          creatives
        </h2>
        <p className="text-lg font-medium leading-[27px] tracking-normal mt-[10px]">
          Meelance provides a dedicated platform for representing and managing
          the brightest stars in the industry. Connect with emerging and
          established talents, streamline your workflow, and propel careers to
          stardom.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[10px] py-[24px] px-[16px] rounded-3xl bg-[#F7EEFC] mt-[20px]">
        <div className="flex-1">
          <Image
            src="/performance.svg"
            alt="Gallery_Animation"
            width="567"
            height="318"
            className="m-auto"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold leading-4 tracking-normal">
            Effectively manage and represent your talent
          </h3>
          <div className="flex mt-[15px] gap-[10px]">
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Build and onboard your roster
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Set up your agency in just a few quick clicks. Add your clients
                and manage their profiles to ensure they’re set up for success.
                Invite your staff to add their rosters and start submitting
                today.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Manage submissions with ease
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Find all jobs - from feature films to branded content. You can
                customize applications or one-click submit to get your talent
                booked with some of the biggest tittles or brands .
              </p>
            </div>
          </div>
          <div className="flex mt-[15px] gap-[10px]">
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Book jobs worldwide
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                With thousands of opportunities at your fingertips, develop your
                talent quickly by building their credits and gaining exposure.
                Our workflow tools are built with flexibility in mind --
                allowing you to easily work the way you want.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold leading-4 tracking-normal">
                Represent your talent with confidencey
              </h4>
              <p className="text-sm font-normal leading-4 tracking-normal mt-[10px]">
                Connect with producers, casting directors, and creators around
                the world while building recognition for your company across the
                industry.
              </p>
            </div>
          </div>
          <button className="text-[10px] font-bold leading-[11px] tracking-normal bg-[#fff] rounded-md py-[10px] px-[15px] mt-[20px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindRoles;
