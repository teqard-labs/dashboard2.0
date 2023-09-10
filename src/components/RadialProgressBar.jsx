import React from "react";
// import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// // Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// // Radial separators
// import RadialSeparators from "./RadialSeparators";



function RadialProgressBar() {

    const percentageO2 = 70;
    const percentageCO2 = 40;

    return (
        <div className="flex flex-row">
            {/* <div label="Clockwise">
                <CircularProgressbar
                    value={percentageO2}
                    text={`${percentageO2}% Oxygen Produced`}
                    
                    styles={buildStyles({
                        pathColor: "#6bd3f2",
                        trailColor: "#e8e6e6",
                        textSize:'8px'
                      })}
                    
                />
            </div> */}
            <div label="Clockwise" className="ml-10">
                <CircularProgressbar
                    value={percentageCO2}
                    text={`${percentageCO2}% CO2 Reduced`}
                    styles={buildStyles({
                        pathColor: "#383838",
                        trailColor: "#e8e6e6",
                        textSize:'8px'
                      })}
                    
                />
            </div>
        </div>
    );
};

/* Reference: https://codesandbox.io/s/vymm4oln6y?file=/index.js:6203-6316 */

export default RadialProgressBar