// src/components/Hero.jsx
import React, { lazy, Suspense } from "react";
import TopBar from "./TopBar";
import { FaChevronDown } from "react-icons/fa";

const ProfileCard = lazy(() => import("./ProfileCard"));
const MainContent = lazy(() => import("./MainContent"));

const Hero = () => {
	return (
		<header className="relative bg-[#060606] text-white overflow-hidden">
			
			<div className="fixed z-50 top-8 left-0 right-0 max-w-lg mx-auto px-4 py-2 backdrop-blur rounded-2xl">
				<TopBar />
			</div>

			<div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					<Suspense
						fallback={
							<div className="h-80 bg-gray-800 animate-pulse rounded-lg" />
						}
					>
						<ProfileCard />
					</Suspense>

					<Suspense
						fallback={
							<div className="h-80 bg-gray-800 animate-pulse rounded-lg" />
						}
					>
						<MainContent />
					</Suspense>
				</div>
			</div>

			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
				<FaChevronDown className="text-gray-400 text-2xl" />
			</div>
		</header>
	);
};

export default Hero;
