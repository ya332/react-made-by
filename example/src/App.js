import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MadeBy from "./src/MadeBy";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<MadeBy
				style={{ zIndex: "1" }}
				position="left"
				imgfirst={false}
				src="https://ya332.github.io/assets/img/headshot_400x300.jpg"
				destination="https://ya332.github.io"
				text="Made with ☕ by Yigit"
			/>
		</div>
	);
}

export default App;
