import {
	FaGithub,
	FaEnvelope,
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaNodeJs,
	FaJsSquare,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiFirebase,
	SiRedux,
	SiTypescript,
} from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import profileImg from "../assets/profile.png";

const ProfileCard = () => {
	return (
		<div className="relative flex items-center justify-center px-4 md:px-20">
			
			<FaReact
				className="absolute text-cyan-400 text-3xl drop-shadow-md"
				style={{
					animation: "orbit1 8s linear infinite",
					top: "10%",
					left: "15%",
				}}
			/>
			<FaHtml5
				className="absolute text-orange-500 text-2xl drop-shadow-md"
				style={{
					animation: "orbit2 6s linear infinite",
					top: "20%",
					right: "10%",
				}}
			/>
			<SiTailwindcss
				className="absolute text-sky-400 text-2xl drop-shadow-md"
				style={{
					animation: "orbit3 7s linear infinite",
					bottom: "15%",
					left: "20%",
				}}
			/>
			<FaCss3Alt
				className="absolute text-blue-500 text-2xl drop-shadow-md"
				style={{
					animation: "orbit4 5s linear infinite",
					bottom: "20%",
					right: "15%",
				}}
			/>
			<SiFirebase
				className="absolute text-yellow-400 text-2xl drop-shadow-md"
				style={{
					animation: "orbit5 9s linear infinite",
					top: "30%",
					left: "25%",
				}}
			/>
			<FaNodeJs
				className="absolute text-green-500 text-2xl drop-shadow-md"
				style={{
					animation: "orbit6 10s linear infinite",
					bottom: "25%",
					right: "20%",
				}}
			/>
			<SiRedux
				className="absolute text-purple-500 text-2xl drop-shadow-md"
				style={{
					animation: "orbit7 7.5s linear infinite",
					top: "15%",
					left: "30%",
				}}
			/>
			<FaJsSquare
				className="absolute text-yellow-600 text-2xl drop-shadow-md"
				style={{
					animation: "orbit8 8.5s linear infinite",
					bottom: "30%",
					right: "25%",
				}}
			/>

			<div className="bg-[#0b1215] text-center rounded-2xl p-8 w-full max-w-md relative shadow-xl z-10 overflow-hidden">
				
				<div className="absolute top-0 left-0 w-24 h-24 rounded-full border-2 border-dashed border-green-500 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

				<img
					src={profileImg}
					alt="MD. Saheduzzaman"
					className="rounded-xl w-full p-0 object-cover"
				/>

				<h2 className="text-2xl font-bold mt-4 text-white">
					MD. Saheduzzaman
				</h2>

				<div className="my-2 relative">
					
					<div className="absolute bottom-0 right-0 w-20 h-20 border-2 border-dashed border-green-500 rounded-full transform translate-x-1/2 translate-y-1/2 animate-spin-slow"></div>
				</div>

				<p className="text-gray-400 text-sm px-2">
					A Frontend Developer who has delivered numerous creative
					solutions.
				</p>

				<div className="flex justify-center gap-4 mt-4 text-gray-300 text-xl">
					<a href="https://x.com/sahed_009" title="Twitter profile">
						<RiTwitterXLine />
					</a>
					<a
						href="https://github.com/sahed009/"
						title="Github profile"
					>
						<FaGithub />
					</a>
					<a href="mailto:sahedcodes@gmail.com" title="Email me">
						<FaEnvelope />
					</a>
				</div>
			</div>

			{/* Inject Keyframe CSS for Animations */}
			<style>
				{`
			@keyframes orbit1 {
			  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
			}
			@keyframes orbit2 {
			  0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
			}
			@keyframes orbit3 {
			  0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
			}
			@keyframes orbit4 {
			  0% { transform: rotate(0deg) translateX(70px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
			}
			@keyframes orbit5 {
			  0% { transform: rotate(0deg) translateX(110px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
			}
			@keyframes orbit6 {
			  0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
			}
			@keyframes orbit7 {
			  0% { transform: rotate(0deg) translateX(85px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(85px) rotate(-360deg); }
			}
			@keyframes orbit8 {
			  0% { transform: rotate(0deg) translateX(95px) rotate(0deg); }
			  100% { transform: rotate(360deg) translateX(95px) rotate(-360deg); }
			}
			@keyframes spin-slow {
			  0% { transform: rotate(0deg); }
			  100% { transform: rotate(360deg); }
			}
		  `}
			</style>
		</div>
	);
};

export default ProfileCard;
