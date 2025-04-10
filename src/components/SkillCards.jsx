import { FaArrowRight } from "react-icons/fa";

const SkillCards = () => {
	return (
		<div className="flex flex-col space-y-4 max-w-sm">
			<div className="relative bg-orange-500 rounded-lg p-6 shadow-lg">
				<h3 className="text-white text-lg md:text-xl font-bold">
					DYNAMIC ANIMATION, MOTION DESIGN
				</h3>
				<FaArrowRight className="absolute bottom-4 right-4 text-white" />
			</div>
			<div className="relative bg-green-400 rounded-lg p-6 shadow-lg">
				<h3 className="text-white text-lg md:text-xl font-bold">
					FRAMER, FIGMA, WORDPRESS, REACTJS
				</h3>
				<FaArrowRight className="absolute bottom-4 right-4 text-white" />
			</div>
		</div>
	);
};

export default SkillCards;
