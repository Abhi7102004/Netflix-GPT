import Background from "./Background";
import FaqList from "./FaqList";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";

const Home = () => {
  return (
    <div>
      <Background/>
      <div className="relative h-screen w-full bg-black bg-opacity-80">
        <Header />
        <Intro />
      </div>
      <div className="bg-[#0a0a0a]">
        <div className="lg:mx-36 md:mx-24 mx-4 pt-16 rounded-md">
          <p className="font-mukta text-3xl text-white mb-3">
            Get More From Your Membership
          </p>
          <div className="w-full justify-between rounded-md h-auto sm:h-80 flex flex-col sm:flex-row bg-gradient-to-r from-[#673b3b] to-[#09023d]">
            <div className="basis-1/2 p-4 sm:ml-12 sm:py-20">
              <h1 className="text-2xl lg:text-4xl md:3xl font-bold text-white lg:mb-4 mb:2">
                Mobile games now included in every plan
              </h1>
              <p className="text-sm sm:text-md text-wrap font-medium text-gray-300">
                No ads, extra fees, or in-app purchases. Enjoy unlimited access
                to a growing catalogue of popular and exclusive games.
              </p>
            </div>
            <div className="overflow-hidden p-4 sm:p-0 flex justify-center md:justify-end items-center">
              <img
                className="object-cover scale-150 sm:scale-100 h-48 sm:h-full md:mr-0 mr-[-20px] "
                src="https://assets.nflxext.com/ffe/siteui/acquisition/nmhp/games-lg.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <Features />
        <FaqList />
        <p className="lg:mx-36 md:mx-24 mx-4 pt-16 text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="lg:mx-36 md:mx-24 mx-4 w-auto mt-8 flex items-center gap-2 flex-col sm:flex-row">
          <input
            className="rounded-md border-white border-[2px] lg:w-8/12 xl:w-10/12 w-6/12 bg-black opacity-80 pl-4 py-3"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="flex items-center gap-1 px-2 py-[10px] text-white font-semibold text-sm sm:text-md lg:text-2xl md:text-xl rounded-md bg-[#C11119]"
          >
            Get Started{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>{" "}
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
