import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.footer
			className="bg-[#060606] text-gray-300 py-10 px-6 md:px-12"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={fadeIn}
		>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden">
				
				<div className="text-center md:text-left">
					<h3 className="text-xl font-semibold text-white mb-2">
						MD. Saheduzzaman
					</h3>
					<p className="text-sm max-w-xs">
						Frontend Developer | React & JavaScript Enthusiast
					</p>
				</div>

				<div className="flex space-x-6">
					<motion.a
						href="https://x.com/sahedcodes"
						aria-label="X profile"
						className="text-gray-300 hover:text-cyan-400"
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3 },
						}}
					>
						<FaTwitter size={24} />
					</motion.a>
					<motion.a
						href="https://github.com/sahed009"
						aria-label="GitHub profile"
						className="text-gray-300 hover:text-white"
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3 },
						}}
					>
						<FaGithub size={24} />
					</motion.a>
					<motion.a
						href="mailto:sahedcodes@gmail.com"
						aria-label="Email"
						className="text-gray-300 hover:text-red-400"
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3 },
						}}
					>
						<FaEnvelope size={24} />
					</motion.a>
				</div>

				<motion.button
					onClick={scrollToTop}
					className="text-gray-300 hover:text-green-400 focus:outline-none"
					whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
					aria-label="Scroll to top"
				>
					<FaArrowUp size={24} />
				</motion.button>
			</div>

			<div className="mt-8 text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} MD. Saheduzzaman. All rights
				reserved.
			</div>
		</motion.footer>
	);
};

export default Footer;
