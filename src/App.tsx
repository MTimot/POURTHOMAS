import Avatar from "./components/Avatar/Avatar";
import "./App.css";

function App() {
	return (
		<>
			<Avatar
				firstname="Bart"
				lastname="SIMPSON"
				imgsrc="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
			/>
			<Avatar
				firstname="Homer"
				lastname="SIMPSON"
				imgsrc="https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png"
			/>
		</>
	);
}

export default App;
