// src/components/MainContent.jsx
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from "react-countup";
import { FaCalendarAlt, FaFolder, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

function debounce(fn, ms = 100) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), ms);
	};
}

const MainContent = () => {
	const words = [
		"Frontend Developer",
		"Programmer",
		"UI/UX Enthusiast",
		"Creative Coder",
	];
	const [text] = useTypewriter({
		words,
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 50,
		delaySpeed: 1500,
	});

	const measurerRef = useRef(null);
	const headingRef = useRef(null);
	const [fixedHeight, setFixedHeight] = useState(0);

	const measure = () => {
		if (!measurerRef.current || !headingRef.current) return;
		const measurer = measurerRef.current;
		const styles = getComputedStyle(headingRef.current);
		[
			"fontSize",
			"fontFamily",
			"fontWeight",
			"lineHeight",
			"whiteSpace",
			"letterSpacing",
			"wordWrap",
			"width",
		].forEach((prop) => {
			measurer.style[prop] = styles[prop];
		});

		let maxH = 0;
		words.forEach((w) => {
			measurer.textContent = w;
			maxH = Math.max(maxH, measurer.offsetHeight);
		});
		setFixedHeight(maxH);
	};

	useLayoutEffect(measure, [words]);
	useEffect(() => {
		const onResize = debounce(measure, 150);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<section aria-labelledby="hero-title" className="text-center p-8">
			<div
				ref={measurerRef}
				style={{
					position: "absolute",
					visibility: "hidden",
					top: -9999,
					left: -9999,
					width: "100%",
				}}
			/>

			<h1
				id="hero-title"
				ref={headingRef}
				className="text-4xl md:text-6xl font-bold mb-4 overflow-hidden"
				style={{ height: fixedHeight ? `${fixedHeight}px` : "auto" }}
			>
				{text}
				<Cursor />
			</h1>

			<p className="mt-4 text-sm md:text-base max-w-md mx-auto text-gray-300">
				Passionate about creating intuitive and engaging user
				experiences. Specialize in transforming ideas into beautifully
				crafted products.
			</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{
						icon: (
							<FaCalendarAlt className="text-blue-400 text-3xl mb-2" />
						),
						end: 3,
						label: "YEARS OF EXPERIENCE",
						bg: "bg-blue-900",
						textColor: "text-blue-400",
						delay: 0.2,
					},
					{
						icon: (
							<FaFolder className="text-green-400 text-3xl mb-2" />
						),
						end: 34,
						label: "PROJECTS COMPLETED",
						bg: "bg-green-900",
						textColor: "text-green-400",
						delay: 0.4,
					},
					{
						icon: (
							<FaGlobe className="text-purple-400 text-3xl mb-2" />
						),
						end: 15,
						label: "WORLDWIDE CLIENTS",
						bg: "bg-purple-900",
						textColor: "text-purple-400",
						delay: 0.6,
					},
				].map(({ icon, end, label, bg, textColor, delay }, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay }}
						className={`flex flex-col items-center p-4 ${bg} rounded-lg shadow-md hover:scale-105 transition-transform duration-300`}
					>
						{icon}
						<CountUp
							start={0}
							end={end}
							duration={4}
							prefix="+"
							className={`text-3xl font-bold ${textColor}`}
						/>
						<span className="text-gray-300 mt-2">{label}</span>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default MainContent;
