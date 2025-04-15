import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

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
			toast.error("Please fill in all fields");
			return;
		}
		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email address");
			return;
		}

		console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
		console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
		console.log(
			"User/Public Key:",
			import.meta.env.VITE_USER_ID 
		);

		toast.info("Sending...");

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID, 
				import.meta.env.VITE_TEMPLATE_ID, 
				e.target,
				import.meta.env.VITE_USER_ID 
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.error(error);
					toast.error(
						"Failed to send message. Please try again later."
					);
				}
			);
	};

	return (
		<section
			id="contact"
			className="pt-30 pb-12 px-4 bg-gradient-to-br from-[#171717] to-[#0c0c0c] text-gray-200 overflow-hidden"
		>
			<ToastContainer position="top-right" autoClose={5000} />

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="max-w-lg mx-auto bg-[#171717] bg-opacity-60 rounded-xl shadow-lg p-6 backdrop-blur-sm"
			>
				<h2 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center mb-8">
					Contact Me
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block mb-2 font-medium"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={handleChange}
							className="w-full p-3 bg-gray-800 rounded-lg text-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 font-medium"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email" 
							value={email}
							onChange={handleChange}
							className="w-full p-3 bg-gray-800 rounded-lg text-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
							placeholder="your.email@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message" 
							value={message}
							onChange={handleChange}
							rows="4"
							className="w-full p-3 bg-gray-800 rounded-lg text-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
							placeholder="Your message..."
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full p-3 bg-gradient-to-r from-[#0b1215] via-[#011222] to-[#020d19] text-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 font-semibold cursor-pointer"
					>
						Send Message
					</button>
				</form>
			</motion.div>
		</section>
	);
};

export default Contact;
