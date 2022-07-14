import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FirstSquare.scss";

const FirstSquare = () => {
    const [isOn, setIsOn] = useState<boolean>(false);

    const toggleSwitch = () => {
        setIsOn((currentValue) => !currentValue);
    };

    const spring = {
        type: "spring",
        stiffness: 600,
        damping: 35,
    };

    return (
        <motion.div
            className="square"
            drag="x"
            data-isOn={isOn}
            onClick={toggleSwitch}
        >
            <motion.div
                className="item"
                layout
                transition={spring}
            ></motion.div>
            <motion.div
                className="item"
                layout
                transition={spring}
            ></motion.div>
            <motion.div
                className="item"
                layout
                transition={spring}
            ></motion.div>
        </motion.div>
    );
};

export default FirstSquare;
