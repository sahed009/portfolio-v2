import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.webp"; // Adjust path based on your assets folder

const ProfileCard = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 relative max-w-sm">
			<div className="absolute top-0 left-0 w-16 h-0.5 border-t-2 border-dashed border-orange-500"></div>
			<div className="flex flex-col items-center">
				<div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mb-4 border-2 border-dashed border-orange-500">
					<img
						src={profileImage}
						alt="Profile"
						className="w-20 h-20"
					/>
				</div>
				<h2 className="text-2xl font-bold text-black">Aabid Ahmed</h2>
				<p className="text-gray-600 text-center mt-2 text-sm">
					A Software Engineer who has developed countless innovative
					solutions.
				</p>
				<div className="flex space-x-4 mt-4">
					<FaPhone className="text-orange-500 hover:text-orange-600" />
					<FaEnvelope className="text-orange-500 hover:text-orange-600" />
					<FaLinkedin className="text-orange-500 hover:text-orange-600" />
				</div>
				<button className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700">
					Video Tutorial
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;
