import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="seconds-counter">
			<div className="clock-icon">
				<i className="fas fa-clock"></i>
			</div>
			<div className="second2">
				<button id="button" className="btn btn-secondary">
					{props.digit2 % 10}
				</button>
			</div>
			<div className="second1">{props.digit1 % 10}</div>
			<div className="second0">{props.digit0 % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digit0: PropTypes.number,
	digit1: PropTypes.number,
	digit2: PropTypes.number
};
