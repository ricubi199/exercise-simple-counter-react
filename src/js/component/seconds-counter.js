import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="seconds-counter">
			<div className="clock-icon">
				<span className="badge text-white badge-dark">
					<i className="fas fa-clock"></i>
				</span>
			</div>
			<div className="second5">
				<span className="badge text-white badge-dark">
					{props.digit5 % 10}
				</span>
			</div>
			<div className="second4">
				<span className="badge text-white badge-dark">
					{props.digit4 % 10}
				</span>
			</div>
			<div className="second3">
				<span className="badge text-white badge-dark">
					{props.digit3 % 10}
				</span>
			</div>
			<div className="second2">
				<span className="badge text-white badge-dark">
					{props.digit2 % 10}
				</span>
			</div>
			<div className="second1">
				<span className="badge badge-dark">{props.digit1 % 10}</span>
			</div>
			<div className="second0">
				<span className="badge text-white">{props.digit0 % 10}</span>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digit0: PropTypes.number,
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number,
	digit4: PropTypes.number,
	digit5: PropTypes.number
};
