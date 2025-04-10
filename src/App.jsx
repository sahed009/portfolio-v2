import Hero from "./components/Hero";
import { Element } from "react-scroll";
const App = () => {
	return (
		<>
			<Element name="home">
				<Hero />
			</Element>
		</>
	);
};

export default App;
