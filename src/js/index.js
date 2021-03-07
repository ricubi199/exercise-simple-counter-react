//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/style.css";

//import your own components
import { SecondsCounter } from "./component/seconds-counter.js";

let counter = 0;
let random0 = 0;
let random1 = 0;
let random2 = 0;
let random3 = 0;
let random4 = 0;
let random5 = 5;

setInterval(function(props) {
	random0 = Math.floor(counter / 1);
	random1 = Math.floor(counter / 10);
	random2 = Math.floor(counter / 100);
	random3 = Math.floor(counter / 1000);
	random4 = Math.floor(counter / 10000);
	random5 = Math.floor(counter / 100000);

	counter++;
	ReactDOM.render(
		<SecondsCounter
			digit0={random0}
			digit1={random1}
			digit2={random2}
			digit3={random3}
			digit4={random4}
			digit5={random5}
		/>,
		document.querySelector("#app")
	);
}, 100);

//render your react applicatio
