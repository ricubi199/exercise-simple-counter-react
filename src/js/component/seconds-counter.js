import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export function SecondsCounter(props) {
	return (
		<div className="seconds-c">
			<div className="clock-icon">
				<i className="fas fa-clock"></i>
			</div>
			<div className="secon5">{props.digit5 % 10}</div>
			<div className="second4">{props.digit4 % 10}</div>
			<div className="second3">{props.digit3 % 10}</div>
			<div className="second2">{props.digit2 % 10}</div>
			<div className="second1">{props.digit1 % 10}</div>
			<div className="second0">{props.digit0 % 10}</div>
		</div>
	);
}

// export function SecondsCounter(props) {
// 	return (
// 		<div className="card text-white bg-dark">
// 			<div className="container py-3">
// 				<div className="row">
// 					<div className="col">
// 						<button type="button" className="btn btn-primary">
// 							<span className="badge badge-secondary">
// 								<i className="fas fa-clock"></i>
// 							</span>
// 						</button>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit5}
// 						</span>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit4}
// 						</span>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit3}
// 						</span>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit2}
// 						</span>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit1}
// 						</span>
// 					</div>
// 					<div className="col">
// 						<span className="badge badge-secondary">
// 							{props.digit0}
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

SecondsCounter.propTypes = {
	digit0: PropTypes.number,
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number,
	digit4: PropTypes.number,
	digit5: PropTypes.number
};
