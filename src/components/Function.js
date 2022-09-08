import React, { useState } from "react";

const PakaiFunction = () => {
	const [date, setDate] = useState(new Date());

	function tick() {
		setDate(new Date());
	}

	setInterval(() => tick(), 1000);

	return (
		<div
			className="App"
			style={{
				marginTop: "50",
				width: "500px",
				margin: "0 auto",
				textAlign: "center",
			}}
		>
			<h1>Realtime CLOCK Menggunakan Functional Component</h1>
			<hr />
			<h1>{date.toLocaleTimeString()}</h1>
		</div>
	);
};

export default PakaiFunction;
