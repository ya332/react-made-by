import React, { useState } from "react";
import PropTypes from "prop-types";

const useFade = () => {
	const [fade, setFade] = useState(false);

	const onMouseEnter = () => {
		setFade(true);
	};

	const onMouseLeave = () => {
		setFade(false);
	};

	const fadeStyle = !fade
		? {
				opacity: 1,
				transition: "all .2s ease-in-out",
		  }
		: {
				opacity: 0.5,
				transition: "all .2s ease-in-out",
				background: "#00bfff",
				color: "#ffd700",
		  };

	return { fadeStyle, onMouseEnter, onMouseLeave };
};

const defaultMadeByStyles = {
	background: "#ff4742",
	color: "#fff",
	position: "fixed",
	bottom: "0",
	fontWeight: "500",
	zIndex: "1",
	borderTopLeftRadius: "0.2em",
	padding: "0.5em",
};

const defaultPStyles = {
	margin: "0",
	paddingRight: "5px",
	verticalAlign: "middle",
	display: "inline",
	marginLeft: "0.5em",
	fontWeight: "600",
};

const defaultImgStyles = {
	borderRadius: "2em",
	width: "1.5em",
	verticalAlign: "middle",
};

const handleCustomPosition = (position, formStyles) => {
	var customFormStyles;
	if (position === "left") {
		customFormStyles = { ...formStyles, left: "0px" };
	} else {
		customFormStyles = { ...formStyles, right: "0px" };
	}
	return customFormStyles;
};

const MadeBy = (props) => {
	const { fadeStyle, ...fadeProps } = useFade();

	var componentStyle = handleCustomPosition(props.position, props.style);

	return (
		<a target="_new" href={props.destination}>
			{props.imgfirst && (
				<div
					className="MadeBy"
					style={{ ...fadeStyle, ...defaultMadeByStyles, ...componentStyle }}
					{...fadeProps}
				>
					<img style={defaultImgStyles} src={props.src ? props.src : ""}></img>
					<p style={defaultPStyles}>{props.text}</p>
				</div>
			)}
			{!props.imgfirst && (
				<div
					className="MadeBy"
					style={{ ...fadeStyle, ...defaultMadeByStyles, ...componentStyle }}
					{...fadeProps}
				>
					<p style={defaultPStyles}>{props.text}</p>
					<img style={defaultImgStyles} src={props.src ? props.src : ""}></img>
				</div>
			)}
		</a>
	);
};

MadeBy.defaultProps = {
	madebyStyles: defaultMadeByStyles,
	imgstyles: defaultImgStyles,
	pstyles: defaultPStyles,
};

export default MadeBy;
