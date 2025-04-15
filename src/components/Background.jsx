import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const events = [
	{
		title: "H.S.C.",
		description: "Sylhet Govt. Model School & College, Batch of 2018",
		type: "education",
	},
	{
		title: "Local Contractual Job (Web Developer)",	
		description: "2022-2023",
		type: "job",
	},
	{
		title: "Bachelor of Science in Computer Science & Engineering",
		description: "Metropolitan University, 2020-2026",
		type: "education",
	},
	{
		title: "Freelance Frontend Developer",
		description: "2023-Present",
		type: "job",
	},
];

function Timeline() {
	const timelineRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: timelineRef });
	const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<div ref={timelineRef} className="relative">
			{/* Central timeline */}
			<div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-500"></div>
			{/* Progress line */}
			<motion.div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 bg-white"
				style={{ height }}
			/>
			{/* Events */}
			{events.map((event, index) => (
				<div
					key={index}
					className="relative mb-12 flex justify-center items-start"
				>
					{/* Connector dot */}
					<div className="absolute left-1/2 transform -translate-x-1/2 -top-8 md:top-10 w-4 h-4 bg-green-400 rounded-full z-10"></div>
					{/* Event card */}
					<div
						className={`w-11/12 sm:w-6/12 md:w-5/12 ${
							index % 2 === 0 ? "mr-auto" : "ml-auto"
						} relative`}
					>
						<motion.div
							className="p-4 sm:p-6 bg-black shadow-xl rounded-md flex items-center transition-transform hover:scale-105"
							initial={{
								opacity: 0,
								x: index % 2 === 0 ? -50 : 50,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							{event.type === "education" ? (
								<FaGraduationCap className="text-2xl sm:text-3xl mr-2 sm:mr-4 text-gray-300" />
							) : (
								<FaBriefcase className="text-2xl sm:text-3xl mr-2 sm:mr-4 text-gray-300" />
							)}
							<div>
								<h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-200">
									{event.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-400">
									{event.description}
								</p>
							</div>
						</motion.div>
						{/* Connector line */}
						<div
							className={`absolute top-1/2 ${
								index % 2 === 0
									? "right-0 translate-x-2"
									: "left-0 -translate-x-2"
							} w-2 sm:w-4 h-0.5 bg-gray-500 transform -translate-y-1/2`}
						></div>
					</div>
				</div>
			))}
		</div>
	);
}

export default function Background() {
	return (
		<section className="pt-40 pb-16 bg-[#171717] overflow-hidden">
			<div className="container mx-auto px-4">
				<h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
					My Journey
				</h2>
				<Timeline />
			</div>
		</section>
	);
}
