// import { useSimple } from "core-js/fn/symbol";
import React, { useState } from "react";
import "../../utilities.css";
import "./Player.css";

import redBall from "../../public/red.png";

class ClickMe extends React.Component {
    constructor(props) {
      super(props)
      this.state = { fade: false }
    }
    render(props) {
      const fade = this.state.fade
  
      return (
        <button
          ref='button'
          onClick={() => this.setState({ fade: true })}
          onAnimationEnd={() => this.setState({ fade: false })}
          className={fade ? 'fade' : ''}>
          {props.name}
        </button>
      )
    }
  }


const Player = () => {
    const [totalScore, setTotalScore] = useState(0);
    const [breakScore, setBreakScore] = useState(0);
    const photoDict = {
        red: "/public/red.png",
        yellow: "yellow.png",
    };
    const images = require.context('../../public', true);
    const imageList = images.keys().map(image => images(image));
    console.log(images);
    console.log(imageList[1]);

    const addToTotal = () => {
        setTotalScore(totalScore + breakScore);
    };

    const clearTotal = () => {
        setTotalScore(0);
    }

    const clearBreak = () => {
        setBreakScore(0);
    };

    const addToBreak = (score) => {
        setBreakScore(breakScore + score);
    };

    return (
        <div>
            <div className="Player-score-container">
                <div className="Player-score">
                    {/* <h3>Score</h3> */}
                    <h1>Score: {totalScore}</h1>
                </div>
            </div>
            <div className="Player-score-container">
                <div className="Player-score">
                    {/* <h3>Break</h3> */}
                    <h2>Break: {breakScore}</h2>
                </div>
            </div>
            <div className="Player-ball-container">
                <div className="Player-all-balls">
                    <div className="Player-red Player-ball effect3" onClick={() => { addToBreak(1); }}>
                        Red
                    </div>
                </div>
                
                <div className="Player-all-balls grid">
                    <div className="Player-yellow Player-ball effect3" onClick={() => { addToBreak(2); }}>
                        Yellow
                    </div>
                    <div className="Player-green Player-ball effect3" onClick={() => { addToBreak(3); }}>
                        Green
                    </div>
                    <div className="Player-brown Player-ball effect3" onClick={() => { addToBreak(4); }}>
                        Brown
                    </div>
                    <div className="Player-blue Player-ball effect3" onClick={() => { addToBreak(5); }}>
                        Blue
                    </div>
                    <div className="Player-pink Player-ball effect3" onClick={() => { addToBreak(6); }}>
                        Pink
                    </div>
                    <div className="Player-black Player-ball effect3" onClick={() => { addToBreak(7); }}>
                        Black
                    </div>
                </div>
            </div>
            <div className="Player-general-container">
                <div className="Player-general effect1" onClick={() => { addToTotal(); clearBreak(); }}>
                    <h4>Submit</h4>
                </div>
            </div>
            <div className="Player-general-container">
                <div className="Player-general effect2" onClick={() => { clearBreak(); }}>
                    <h4>Reset Break</h4>
                </div>
            </div>
            <div className="Player-general-container">
                <div className="Player-general effect2" onClick={() => { clearBreak(); clearTotal(); }}>
                    <h4>Clear All</h4>
                </div>
            </div>
        </div>
    );
};

export default Player;