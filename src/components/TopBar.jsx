import { FaHome, FaFolder, FaNetworkWired, FaWrench } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-scroll";

const navItems = [
  { icon: FaHome, to: "home", label: "Home" },
  { icon: FaNetworkWired, to: "background", label: "Background" },
  { icon: FaFolder, to: "projects", label: "Projects" },
  { icon: FaWrench, to: "skills", label: "Skills" },
  { icon: MdConnectWithoutContact, to: "contact", label: "Contact" },
];

const TopBar = () => {
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto md:w-full p-4 bg-[#171717] rounded-2xl opacity-80 hover:opacity-100 duration-300 ease-in-out shadow-xl shadow-green-500/20">
      <div className="flex justify-around items-center w-full max-w-lg">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            aria-label={item.label}
          >
            <item.icon className="text-xl text-gray-400 hover:text-green-400 hover:animate-pulse duration-300 ease-in-out" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;