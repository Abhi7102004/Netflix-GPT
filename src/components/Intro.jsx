import { Link } from "react-router-dom";
import { GET_STARTED_BUTTON } from "../utils/constants";
const Intro = () => {
  return (
    <div className="relative lg:mx-36 md:mx-24 mx-8 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold font-mukta text-white lg:mb-4 md:mb-3 mb-2">
          Unlimited movies, TV
        </h1>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-mukta text-white mb-3">
          shows and more
        </h1>
        <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-white mb-7">
          Starts at ₹149. Cancel anytime.
        </h2>
        <h3 className="text-lg font-medium text-white mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div
          className="flex justify-center items-center gap-2 flex-col sm:flex-row"
        >
          <Link to="./login">
            <button
              className="flex items-center mt-4 gap-1 px-2 py-[10px] text-white font-semibold text-sm sm:text-md  lg:text-2xl md:text-xl rounded-md bg-[#C11119]"
            >
              Get Started{" "}
              <span>
                {GET_STARTED_BUTTON}
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
