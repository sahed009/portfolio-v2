import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaFolder } from "react-icons/fa";

const ProjectCard = ({
	title,
	description,
	image,
	liveLink,
	repoLink,
	tags,
}) => {
	return (
		<motion.div
			className="relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-700/30 hover:shadow-green-400/20 transition-all duration-500"
			whileHover={{ scale: 1.03, y: -5 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<div className="relative group">
				{image ? (
					<img
						src={image}
						alt={title}
						className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				) : (
					<div className="w-full h-56 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
						<FaFolder className="text-5xl md:text-6xl text-gray-500" />
					</div>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
			</div>
			<div className="p-6 relative z-10">
				<h3 className="text-2xl font-bold  mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
					{title}
				</h3>
				<p className="text-gray-300 text-sm mb-4 line-clamp-3">
					{description}
				</p>
				<div className="flex flex-wrap gap-2 mb-5">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="bg-gray-800/50 text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-gray-600/30"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="flex justify-between items-center">
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
							aria-label={`View live demo of ${title}`}
						>
							<FaExternalLinkAlt className="mr-2 text-sm" /> Live
							Demo
						</a>
					)}
					<a
						href={repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300"
						aria-label={`View source code of ${title}`}
					>
						<FaGithub className="mr-2 text-sm" /> Source Code
					</a>
				</div>
			</div>
		</motion.div>
	);
};

const ProjectShowcase = ({ projects }) => {
	return (
		<section id="projects" className="pt-36 pb-20 bg-[#060606]">
			<div className="max-w-7xl mx-auto px-6">
				<motion.h2
					className="text-5xl md:text-6xl font-extrabold text-center text-white mb-12"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
						My Projects
					</span>
				</motion.h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

const projects = [
	{
		title: "Eco Adventure",
		description: "An eco-friendly adventure booking platform",
		image: "https://i.ibb.co.com/PZDRSR0d/ecoadv.webp",
		liveLink: "https://eco-sahed009.netlify.app/",
		repoLink: "https://github.com/sahed009/eco-adventure",
		tags: ["React", "TailwindCSS", "Firebase"],
	},
	{
		title: "GadgetHeaven",
		description: "A simple modern e-commerce platform.",
		image: "https://i.ibb.co.com/VcKYGpPM/gadgetheaven.webp",
		liveLink: "https://gadget-heaven-sahed009.netlify.app/",
		repoLink: "https://github.com/sahed009/small-ecommerce",
		tags: ["React", "React Router", "Conext API"],
	},
	{
		title: "Peddy - Pet Adoption",
		description:
			"A pet adoption platform connecting pets with loving homes.",
		image: "https://i.ibb.co.com/FLz3m512/peddy.webp",
		liveLink: "https://peddy-sahed009.netlify.app/",
		repoLink: "https://github.com/sahed009/pet-adoption",
		tags: ["JS ES6", "TailwindCSS", "HTML"],
	},
];

const Projects = () => {
	return <ProjectShowcase projects={projects} />;
};

export default Projects;
