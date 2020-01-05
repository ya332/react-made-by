import React, { useState } from "react";

const useFade = () => {
    const [fade, setFade] = useState(false);

    const onMouseEnter = () => {
        setFade(true);
    };

    const onMouseLeave = () => {
        setFade(false);
    };

    const fadeStyle = !fade ? {
            opacity: 1, transition: 'all .2s ease-in-out',
        } : {   
            opacity: 0.5, transition: 'all .2s ease-in-out',
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
    right: "0",
    fontWeight: "500",
    zIndex: "970000",
    borderTopLeftRadius: "0.2em",
    padding: "0.5em"
};

const defaultPStyles = {
    margin: "0",
    verticalAlign: "middle",
    display: "inline",
    marginLeft: "0.5em",
    fontWeight: "600",
};

const defaultImgStyles = {
    borderRadius: "2em",
    width: "1.5em",
    verticalAlign: "middle"
}


const MadeBy = (props) => {
    const { fadeStyle, ...fadeProps } = useFade();

    return (
        <a className="MadeBy__a" target="_new" href={props.destination} >
            <div className="MadeBy__div" style={{...fadeStyle, ...defaultMadeByStyles}}{...fadeProps}>

                <img className="MadeBy__img" style={defaultImgStyles} src={props.src ? props.src : ""}></img>
                <p className="MadeBy__p" style={defaultPStyles}>{props.text}</p>
            </div >
        </a>
    )
}

MadeBy.defaultProps = {
    madebyStyles: defaultMadeByStyles,
    imgstyles: defaultImgStyles,
    pstyles: defaultPStyles
};

export default MadeBy;
