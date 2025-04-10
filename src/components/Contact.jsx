import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	// State for form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	// Helper function to handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "name") setName(value);
		if (name === "email") setEmail(value);
		if (name === "message") setMessage(value);
	};

	// Simple email validation
	const isValidEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic front-end validation
		if (!name || !email || !message) {
			toast.error("Please fill in all fields");
			return;
		}
		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email address");
			return;
		}

		// Optional logs to confirm you have the correct env values
		console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
		console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
		console.log(
			"User/Public Key:",
			import.meta.env.VITE_USER_ID /* or VITE_PUBLIC_KEY */
		);

		// Provide user feedback
		toast.info("Sending...");

		// Attempt sending the form
		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID, // e.g. service_88hho7m
				import.meta.env.VITE_TEMPLATE_ID, // e.g. template_y3bf2jw
				e.target,
				import.meta.env.VITE_USER_ID // or your public key, e.g. public_XXXXXXXX
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					// Reset form
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
			className="py-12 px-4 bg-gradient-to-br from-[#171717] to-[#0c0c0c] text-gray-200"
		>
			{/* ToastContainer for notifications */}
			<ToastContainer position="top-right" autoClose={5000} />

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="max-w-lg mx-auto bg-[#171717] bg-opacity-60 rounded-xl shadow-lg p-6 backdrop-blur-sm"
			>
				<h2 className="text-3xl font-semibold text-center mb-8 font-mono">
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
							name="name" // Must match template variable if you're using `{{name}}`
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
							name="email" // Must match template variable `{{email}}`
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
							name="message" // Must match template variable `{{message}}`
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
