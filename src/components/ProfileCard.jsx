import { FaFire } from "react-icons/fa";
import { FaDribbble, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";
const ProfileCard = () => {
  return (
    <div className=" flex items-center justify-center  px-4 md:px-20">
      <div className="bg-white text-center rounded-2xl p-8 w-full relative shadow-xl">
        {/* Curved Dotted Line Top Left */}
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-2 border-dashed border-green-500 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="MD. Saheduzzaman"
          className="rounded-xl w-full md:h-96 p-0 object-cover"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold mt-4 text-black">MD. Saheduzzaman</h2>

        {/* Fire Icon */}
        <div className="my-2 relative">
          <FaFire className="text-green-500 text-xl mx-auto" />
          {/* Curved Dotted Line Bottom Left */}
          <div className="absolute -left-10 bottom-0 w-20 h-20 border-2 border-dashed border-green-500 rounded-full transform rotate-90 origin-bottom-left"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm px-2">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-green-500 text-xl">
          <FaDribbble />
          <FaTwitter />
          <FaGithub />
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
