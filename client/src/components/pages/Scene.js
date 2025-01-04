import React, { useState } from "react";

import Player from "../modules/Player";
import "../../utilities.css";
import "./Scene.css";


const Scene = () => {
    // const [totalScore1, setTotalScore1] = useState(0);

    return (
        <div className="u-flex">
            <div className="Player-container u-textCenter">
                <Player />
            </div>
            <div className="Player-container u-textCenter">
                <Player />
            </div>
        </div>
    );
};

export default Scene;