import React from "react";

let ColorBlock = (props) => {
    console.log(props)
    return (
        <div className="colorBlock" style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock;