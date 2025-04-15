import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Element } from "react-scroll";
import Projects from "./components/Projects";
import Background from "./components/Background";
import SkillCards from "./components/SkillCards";
import React from "react";

const App = () => {
	return (
		<div className="bg-[#060606] font-mono">
			<Element name="home">
				<Hero />
			</Element>
			<Element name="background">
				<Background />
			</Element>
			<Element name="projects">
				<Projects />
			</Element>
			<Element name="skills">
				<SkillCards />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
			<Footer />
		</div>
	);
};

export default App;
