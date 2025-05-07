import { Link } from "react-router";
import { FaGift } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"; 
import { IoIosRocket } from "react-icons/io"; 

const SpecialOffers = () => {
  return (
    <section className="text-center my-10">
      
      <div className="marquee-container mb-4">
        <marquee className="text-xl font-semibold text-red-600 flex items-center">
          <AiOutlineStar className="mr-2 text-yellow-500 text-2xl animate-pulse" />
           Amazing Offers Going On! Don't Miss Out! 
          <IoIosRocket className="ml-2 text-blue-500 text-2xl animate-pulse" />
        </marquee>
      </div>

      <div className="space-y-5">
      <span className="text-blue-600 text-sm">New to this page?</span>
      <h2 className="text-2xl font-bold text-blue-600 mb-2 flex justify-center items-center">
        
        <FaGift className="mr-2 text-3xl" />
        Check Out Special Offers!
      </h2>
      
      <p className="text-gray-600 mb-4">Get exclusive deals on top apps today.</p>
      </div>
      
      
      <Link to="/offers" className="btn btn-primary">
        View Offers
      </Link>
    </section>
  );
};

export default SpecialOffers;
