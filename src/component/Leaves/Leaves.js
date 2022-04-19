import React from "react";
import "./Leaves.css";
import leaf1 from "../image/leaves/maple1.png";
import leaf2 from "../image/leaves/maple2.png";
import leaf3 from "../image/leaves/maple3.png";
import leaf4 from "../image/leaves/maple4.png";

export default class Leaves extends React.Component {
  render() {
    const width1 = '80vw';
    const width2 = "100vw";
    return (
      <div id="container">
        <div class="set">
          <div>
            <img src={leaf1} alt="1" width={width1}/>
          </div>
          <div>
            <img src={leaf2} alt="2" width={width1}/>
          </div>
          <div>
            <img src={leaf3} alt="3" width={width1}/>
          </div>
          <div>
            <img src={leaf4} alt="4" width={width1}/>
          </div>
          <div>
            <img src={leaf1} alt="1" width={width2}/>
          </div>
          <div>
            <img src={leaf2} alt="2" width={width2}/>
          </div>
          <div>
            <img src={leaf3} alt="3" width={width2}/>
          </div>
          <div>
            <img src={leaf4} alt="4" width={width2}/>
          </div>
        </div>
      </div>
    );
  }
}
