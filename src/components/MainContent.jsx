import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from "react-countup";
import { FaCalendarAlt, FaFolder, FaGlobe } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MainContent = () => {
	const [text] = useTypewriter({
		words: [
			"Frontend Developer",
			"Programmer",
			"UI/UX Enthusiast",
			"Creative Coder",
		],
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 50,
		delaySpeed: 1500,
	});

	return (
		<div className="h-screen text-center text-white p-8">
			
			<h1 className="text-4xl md:text-6xl font-bold mb-4">
				{text}
				<Cursor />
			</h1>

			<p className="mt-4 text-sm md:text-base max-w-md mx-auto text-gray-300">
				Passionate about creating intuitive and engaging user
				experiences. Specialize in transforming ideas into beautifully
				crafted products.
			</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-col items-center p-4 bg-blue-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
				>
					<FaCalendarAlt className="text-blue-400 text-3xl mb-2" />
					<CountUp
						start={0}
						end={3}
						duration={4}
						prefix="+"
						className="text-3xl font-bold text-blue-400"
					/>
					<span className="text-gray-300 mt-2">
						YEARS OF EXPERIENCE
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-col items-center p-4 bg-green-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
				>
					<FaFolder className="text-green-400 text-3xl mb-2" />
					<CountUp
						start={0}
						end={34}
						duration={4}
						prefix="+"
						className="text-3xl font-bold text-green-400"
					/>
					<span className="text-gray-300 mt-2">
						PROJECTS COMPLETED
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="flex flex-col items-center p-4 bg-purple-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
				>
					<FaGlobe className="text-purple-400 text-3xl mb-2" />
					<CountUp
						start={0}
						end={15}
						duration={4}
						prefix="+"
						className="text-3xl font-bold text-purple-400"
					/>
					<span className="text-gray-300 mt-2">
						WORLDWIDE CLIENTS
					</span>
				</motion.div>
			</div>
		</div>
	);
};

export default MainContent;
