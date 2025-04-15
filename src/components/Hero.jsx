import React from "react";

import TopBar from "./TopBar";
import ProfileCard from "./ProfileCard";
import MainContent from "./MainContent";
const Hero = () => {
	return (
		<>
			<div className="bg-[#060606] p-8 text-white overflow-hidden">
				<div className="fixed z-50 top-8 left-0 right-0 max-w-lg mx-auto px-2 py-8 rounded-2xl">
					<TopBar />
				</div>
				<div className="container mx-auto px-1 md:px-8 mt-30">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						<ProfileCard />
						<MainContent />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
