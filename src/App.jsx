import Contact from "./components/Contact";
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
		</>
	);
};

export default App;
