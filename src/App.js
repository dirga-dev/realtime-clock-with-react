import React from "react";
import "./App.css";
import Class from "./components/Class.js";
import Function from "./components/Function.js";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Realtime Clock</h1>
				<br></br>
				<br></br>
				<Class />
				<Function />
			</div>
		);
	}
}

export default App;
