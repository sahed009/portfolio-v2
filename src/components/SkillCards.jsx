import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

// Map your color keys to complete class names
const colorMapping = {
	"blue-400": { bg: "bg-blue-400", text: "text-blue-400" },
	"yellow-400": { bg: "bg-yellow-400", text: "text-yellow-400" },
	"teal-400": { bg: "bg-teal-400", text: "text-teal-400" },
	"orange-400": { bg: "bg-orange-400", text: "text-orange-400" },
};

const skills = [
	{
		name: "React",
		icon: <FaReact className="text-blue-400" />,
		proficiency: 95,
		color: "blue-400",
	},
	{
		name: "JavaScript",
		icon: <FaJs className="text-yellow-400" />,
		proficiency: 90,
		color: "yellow-400",
	},
	{
		name: "TailwindCSS",
		icon: <SiTailwindcss className="text-teal-400" />,
		proficiency: 85,
		color: "teal-400",
	},
	{
		name: "Firebase",
		icon: <SiFirebase className="text-orange-400" />,
		proficiency: 80,
		color: "orange-400",
	},
];

const SkillCards = () => {
	return (
		<section className="w-full py-12 px-4 bg-[#060606] border-t border-gray-800 text-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-semibold text-center mb-10 text-gray-100">
					Skills
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => {
						const { bg, text } = colorMapping[skill.color];

						return (
							<motion.div
								key={index}
								className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								whileHover={{ scale: 1.05 }}
							>
								<div className="text-3xl mb-4">
									{skill.icon}
								</div>
								<h3 className="text-lg font-medium text-gray-100 mb-2">
									{skill.name}
								</h3>
								<CountUp
									start={0}
									end={skill.proficiency}
									duration={1.5}
									suffix="%"
									className={`text-xl font-semibold ${text}`}
								/>
								<div className="w-full h-1.5 bg-gray-700 mt-2 rounded-full">
									<motion.div
										className={`h-full ${bg} rounded-full`}
										initial={{ width: 0 }}
										whileInView={{
											width: `${skill.proficiency}%`,
										}}
										viewport={{ once: true, amount: 0.3 }}
										transition={{
											duration: 1.5,
											ease: "easeOut",
											delay: 0.5 + index * 0.1,
										}}
									/>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SkillCards;
