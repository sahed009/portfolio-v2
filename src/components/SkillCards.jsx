import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
	{
		name: "React",
		icon: FaReact,
		proficiency: 95,
		color: "#61dafb",
		description: "Building dynamic UIs",
	},
	{
		name: "JavaScript",
		icon: FaJs,
		proficiency: 90,
		color: "#f7df1e",
		description: "Core web programming",
	},
	{
		name: "TailwindCSS",
		icon: SiTailwindcss,
		proficiency: 85,
		color: "#38bdf8",
		description: "Utility-first CSS",
	},
	{
		name: "Firebase",
		icon: SiFirebase,
		proficiency: 80,
		color: "#ffca28",
		description: "Backend as a service",
	},
];

const SkillCard = ({ skill, index }) => {
	const Icon = skill.icon;
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.4 }); 

	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden"); 
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			className="relative flex flex-col items-center p-6 bg-[#0e0e0e] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
			variants={{
				hidden: { opacity: 0, y: 30 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={controls}
			transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
			role="article"
			aria-label={`Skill: ${skill.name}, Proficiency: ${skill.proficiency}%`}
			tabIndex={0}
		>
			
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
				{skill.description}
			</div>

			
			<div className="relative w-28 h-28 mb-5">
				<svg className="w-full h-full" viewBox="0 0 36 36">
					<circle
						className="text-gray-600"
						strokeWidth="3"
						stroke="currentColor"
						fill="none"
						cx="18"
						cy="18"
						r="15.9155"
					/>
					<motion.circle
						className="text-current"
						stroke={skill.color}
						strokeWidth="3"
						strokeLinecap="round"
						fill="none"
						cx="18"
						cy="18"
						r="15.9155"
						initial={{ strokeDasharray: "0 100" }}
						animate={
							inView
								? {
										strokeDasharray: `${skill.proficiency} 100`,
								  }
								: { strokeDasharray: "0 100" }
						}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							delay: 0.3 + index * 0.15,
						}}
					/>
				</svg>
				<motion.div
					className="absolute inset-0 flex items-center justify-center"
					style={{ color: skill.color }}
					animate={
						inView
							? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
							: { scale: 1, rotate: 0 }
					}
					transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
				>
					<Icon size={32} />
				</motion.div>
			</div>

			<h3 className="text-xl font-semibold mb-2 text-gray-100">
				{skill.name}
			</h3>
			{inView && (
				<CountUp
					start={0}
					end={skill.proficiency}
					duration={1.5}
					suffix="%"
					className="text-2xl font-bold text-gray-200"
				/>
			)}
		</motion.div>
	);
};

const SkillCards = () => (
	<section
		className="w-full py-32 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-gray-100 relative overflow-hidden"
		style={{
			backgroundImage:
				"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
		}}
	>
		<div className="max-w-7xl mx-auto">
			<motion.h2
				className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				My Skills
			</motion.h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
				{skills.map((skill, index) => (
					<SkillCard key={skill.name} skill={skill} index={index} />
				))}
			</div>
		</div>
	</section>
);

export default SkillCards;
