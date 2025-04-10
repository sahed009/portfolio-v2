import { FaHome, FaFolder, FaNetworkWired, FaWrench } from "react-icons/fa";

import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-scroll";
const TopBar = () => {
	return (
		<div className="flex justify-center items-center w-5/6 mx-auto md:w-lg p-4 bg-[#171717] rounded-2xl shadow-lg">
			<div className="flex justify-around items-center md:px-8 w-full max-w-lg">
				<Link to="home" smooth={true} duration={500}>
					<FaHome className="text-xl text-gray-400 hover:text-green-400 hover:animate-bounce duration-300 ease-in-out" />
				</Link>

				<Link to="" smooth={true} duration={500}>
					<FaFolder className="text-xl text-gray-400 hover:text-green-400 hover:animate-bounce duration-300 ease-in-out" />
				</Link>
				<Link to="" smooth={true} duration={500}>
					<FaNetworkWired className="text-xl text-gray-400 hover:text-green-400 hover:animate-bounce duration-300 ease-in-out" />
				</Link>

				<Link to="" smooth={true} duration={500}>
					<FaWrench className="text-xl text-gray-400 hover:text-green-400 hover:animate-bounce duration-300 ease-in-out" />
				</Link>

				<Link to="" smooth={true} duration={500}>
					<MdConnectWithoutContact className="text-xl text-gray-400 hover:text-green-400 hover:animate-bounce duration-300 ease-in-out" />
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
