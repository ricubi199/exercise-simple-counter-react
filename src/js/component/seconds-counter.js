import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="seconds-counter">
			<div className="clock-icon">
				<span class="badge text-white">
					<i className="fas fa-clock"></i>
				</span>
			</div>
			<div className="second2">
				<span class="badge text-white">{props.digit2 % 10}</span>
			</div>
			<div className="second1">
				<span class="badge text-white">{props.digit1 % 10}</span>
			</div>
			<div className="second0">
				<span class="badge text-white">{props.digit0 % 10}</span>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digit0: PropTypes.number,
	digit1: PropTypes.number,
	digit2: PropTypes.number
};
