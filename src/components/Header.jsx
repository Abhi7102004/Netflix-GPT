import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='relative lg:mx-36 md:mx-24 mx-4'>
      <div className="flex absolute w-full top-0 left-0 p-2 sm:p-4 items-center justify-between z-10">
        <div>
          <img 
            src="https://i.ibb.co/r5krrdz/logo.png" 
            alt="Logo" 
            className="lg:h-10 md:h-8 h-6" 
          />
        </div>
        <div className="flex lg:gap-5 sm:gap-3 gap-2">
          <select className="sm:px-5 px-2 font-semibold text-white border-2 opacity-80 border-white bg-black rounded">
            <option className='font-semibold'>English</option>
            <option className='font-semibold'>हिन्दी</option>
          </select>
          <Link to="/login"><button className="px-3 font-semibold py-1 rounded-md bg-[#C11119] text-white" type="submit">Sign In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
