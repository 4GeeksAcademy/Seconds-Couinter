import React from "react";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center" id='bigboi' >
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
	);
};

export default Home;
