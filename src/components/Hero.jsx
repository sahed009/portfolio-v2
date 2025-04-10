import React from "react";

import TopBar from "./TopBar";
import ProfileCard from "./ProfileCard";
import MainContent from "./MainContent";
import SkillCards from "./SkillCards";
const Hero = () => {
	return (
		<>
			<div className="bg-[#060606] p-8 min-h-screen text-white">
				<div className="fixed z-50 top-8 left-0 right-0 max-w-lg mx-auto px-2 py-8 rounded-2xl">
					<TopBar />
				</div>
				<div className="container mx-auto p-8 mt-30">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						<ProfileCard />
						<MainContent />
						<SkillCards />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
