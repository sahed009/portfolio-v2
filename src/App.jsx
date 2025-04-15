import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Element } from "react-scroll";

const App = () => {
	return (
		<>
			<Element name="home">
				<Hero />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
			<Footer />
		</>
	);
};

export default App;
