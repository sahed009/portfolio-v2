import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
	FaEnvelope,
	FaPhone,
	FaLaptop,
	FaComments,
	FaPaperPlane,
	FaAddressCard,
	FaGlobe,
} from "react-icons/fa";

// Particle configuration for background effect
const particlesConfig = {
	particles: {
		number: { value: 50, density: { enable: true, value_area: 800 } },
		color: { value: ["#00ddeb", "#ff007a"] },
		shape: { type: "circle" },
		opacity: { value: 0.3, random: true },
		size: { value: 3, random: true },
		move: { enable: true, speed: 1, direction: "random", out_mode: "out" },
	},
	interactivity: {
		events: { onhover: { enable: true, mode: "repulse" } },
		modes: { repulse: { distance: 100, duration: 0.4 } },
	},
};

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const formRef = useRef(null);
	const nameInputRef = useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "name") setName(value);
		if (name === "email") setEmail(value);
		if (name === "message") setMessage(value);
	};

	const isValidEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !message) {
			toast.error("Please fill in all fields", {
				className: "custom-toast",
			});
			return;
		}
		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email", {
				className: "custom-toast",
			});
			return;
		}

		setIsSubmitting(true);
		toast.info("Sending...", { className: "custom-toast" });

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_USER_ID
			)
			.then(
				() => {
					toast.success("Message sent successfully!", {
						className: "custom-toast",
					});
					setName("");
					setEmail("");
					setMessage("");
					setIsModalOpen(false);
				},
				(error) => {
					console.error("EmailJS error:", error);
					toast.error("Failed to send message. Try again.", {
						className: "custom-toast",
					});
				}
			)
			.finally(() => setIsSubmitting(false));
	};

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") setIsModalOpen(false);
		};
		if (isModalOpen) {
			window.addEventListener("keydown", handleEsc);
			nameInputRef.current?.focus();
		}
		return () => window.removeEventListener("keydown", handleEsc);
	}, [isModalOpen]);

	return (
		<>
			<style>
				{`
					@keyframes orbit1 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); }
					}
					@keyframes orbit2 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(130px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(130px) rotate(-360deg); }
					}
					@keyframes orbit3 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg); }
					}
					@keyframes orbit4 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(190px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(190px) rotate(-360deg); }
					}
					@keyframes orbit5 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(220px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(220px) rotate(-360deg); }
					}
					@keyframes orbit6 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(250px) rotate(-360deg); }
					}
					@keyframes orbit7 {
						0% { transform: translate(-50%, -50%) rotate(0deg) translateX(280px) rotate(0deg); }
						100% { transform: translate(-50%, -50%) rotate(360deg) translateX(280px) rotate(-360deg); }
					}
				`}
			</style>
			<section
				id="contact"
				className="relative py-32 px-4 bg-gradient-to-b from-[#060606] to-[#0c0c0c] text-gray-100 overflow-hidden"
			>
				
				<div className="absolute inset-0 z-0">
					<FaEnvelope
						className="absolute top-1/2 left-1/2 text-green-400 text-3xl drop-shadow-md"
						style={{
							animation: "orbit1 10s linear infinite",
							animationDelay: "0s",
						}}
					/>
					<FaPhone
						className="absolute top-1/2 left-1/2 text-blue-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit2 12s linear infinite reverse",
							animationDelay: "1s",
						}}
					/>
					<FaLaptop
						className="absolute top-1/2 left-1/2 text-purple-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit3 14s linear infinite",
							animationDelay: "2s",
						}}
					/>
					<FaComments
						className="absolute top-1/2 left-1/2 text-yellow-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit4 16s linear infinite reverse",
							animationDelay: "3s",
						}}
					/>
					<FaPaperPlane
						className="absolute top-1/2 left-1/2 text-red-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit5 18s linear infinite",
							animationDelay: "4s",
						}}
					/>
					<FaAddressCard
						className="absolute top-1/2 left-1/2 text-orange-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit6 20s linear infinite reverse",
							animationDelay: "5s",
						}}
					/>
					<FaGlobe
						className="absolute top-1/2 left-1/2 text-cyan-400 text-2xl drop-shadow-md"
						style={{
							animation: "orbit7 22s linear infinite",
							animationDelay: "6s",
						}}
					/>
				</div>

				<Particles
					id="tsparticles"
					init={loadFull}
					options={particlesConfig}
					className="absolute inset-0 z-0"
				/>

				<ToastContainer
					position="top-right"
					autoClose={5000}
					className="z-60"
					toastClassName="bg-gray-900 text-gray-100 rounded-xl shadow-lg p-4 backdrop-blur-sm border border-gray-700"
				/>

				<motion.button
					onClick={() => setIsModalOpen(true)}
					className="relative mx-auto block px-6 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all duration-300 font-semibold z-10"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Click here to contact me
				</motion.button>

				<AnimatePresence>
					{isModalOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
							onClick={(e) => {
								if (e.target === e.currentTarget)
									setIsModalOpen(false);
							}}
						>
							<motion.div
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								className="relative max-w-lg w-full bg-gray-900/30 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-700/50"
								role="form"
								aria-labelledby="contact-title"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									onClick={() => setIsModalOpen(false)}
									className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
									aria-label="Close modal"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>

								<motion.h2
									id="contact-title"
									className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-lime-200"
									initial={{ y: -30, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.2 }}
								>
									Contact Me
								</motion.h2>

								<form
									ref={formRef}
									onSubmit={handleSubmit}
									className="space-y-8"
								>
									<div className="relative">
										<motion.label
											htmlFor="name"
											className="absolute -top-2 left-4 px-1 text-sm font-medium text-gray-400 bg-gray-900/50 rounded transition-all duration-300"
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.5,
												delay: 0.3,
											}}
										>
											Name
										</motion.label>
										<input
											ref={nameInputRef}
											type="text"
											id="name"
											name="name"
											value={name}
											onChange={handleChange}
											className="w-full p-4 bg-gray-800/50 rounded-xl text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 placeholder-gray-500"
											placeholder="Your Name"
											aria-required="true"
										/>
									</div>

									<div className="relative">
										<motion.label
											htmlFor="email"
											className="absolute -top-2 left-4 px-1 text-sm font-medium text-gray-400 bg-gray-900/50 rounded transition-all duration-300"
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.5,
												delay: 0.4,
											}}
										>
											Email
										</motion.label>
										<input
											type="email"
											id="email"
											name="email"
											value={email}
											onChange={handleChange}
											className="w-full p-4 bg-gray-800/50 rounded-xl text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 placeholder-gray-500"
											placeholder="your.email@example.com"
											aria-required="true"
										/>
									</div>

									<div className="relative">
										<motion.label
											htmlFor="message"
											className="absolute -top-2 left-4 px-1 text-sm font-medium text-gray-400 bg-gray-900/50 rounded transition-all duration-300"
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.5,
												delay: 0.5,
											}}
										>
											Message
										</motion.label>
										<textarea
											id="message"
											name="message"
											value={message}
											onChange={handleChange}
											rows="5"
											className="w-full p-4 bg-gray-800/50 rounded-xl text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 placeholder-gray-500"
											placeholder="Your message..."
											aria-required="true"
										></textarea>
									</div>

									<motion.button
										type="submit"
										disabled={isSubmitting}
										className="relative w-full p-4 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold overflow-hidden group"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Send Message"
									>
										<span className="relative z-10">
											{isSubmitting
												? "Sending..."
												: "Send Message"}
										</span>
										<span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-300 origin-center"></span>
										<AnimatePresence>
											{isSubmitting && (
												<motion.span
													className="absolute right-4 top-1/2 -translate-y-1/2"
													initial={{
														opacity: 0,
														rotate: 0,
													}}
													animate={{
														opacity: 1,
														rotate: 360,
													}}
													exit={{ opacity: 0 }}
													transition={{
														duration: 1,
														repeat: Infinity,
														ease: "linear",
													}}
												>
													<svg
														className="w-5 h-5 text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M12 6v6m0 0v6m0-6h6m-6 0H6"
														/>
													</svg>
												</motion.span>
											)}
										</AnimatePresence>
									</motion.button>
								</form>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</>
	);
};

export default Contact;
