import React from "react";
import "./Nav.css";

const url = "#";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortMenuState: false,
      show: "none",
    };

    //若想在回调函数中使用this则必须绑定
    this.handleClickNavButton = this.handleClickNavButton.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    //监听窗口变化
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    //卸载监听窗口变化
    window.removeEventListener("resize", this.handleResize);
  }

  handleClickNavButton() {
    this.setState((oldState) => {
      if (oldState.shortMenuState === false)
        return {
          shortMenuState: true,
          show: "block",
        };
      else
        return {
          shortMenuState: false,
          show: "none",
        };
    });
    console.log(
      this.state.shortMenuState +
        " " +
        getComputedStyle(document.getElementById("short-menu"), null).display +
        " " +
        this.state.show
    );
  }

  handleResize() {
    if (this.state.shortMenuState) {
      if (window.innerWidth > 540) {
        this.setState({ show: "none" });
      } else {
        this.setState({ show: "block" });
      }
    }
    console.log(
      this.state.shortMenuState +
        " " +
        getComputedStyle(document.getElementById("short-menu"), null).display
    );
  }

  render() {
    const menu = "Menu";
    return (
      <div className="nav">
        <ul className="long-menu">
          <li className="blog">
            <a href={url}>blog</a>
          </li>
          <li className="game">
            <a href={url}>game</a>
          </li>
          <li className="music">
            <a href={url}>music</a>
          </li>
          <li className="video">
            <a href={url}>video</a>
          </li>
          <li className="novel">
            <a href={url}>novel</a>
          </li>
        </ul>
        <button
          className="nav-button"
          id="nav-button"
          onClick={this.handleClickNavButton}
        >
          {menu}
        </button>
        <ul
          className="short-menu"
          id="short-menu"
          style={{ display: this.state.show }}
        >
          <li className="blog">
            <a href={url}>blog</a>
          </li>
          <li className="game">
            <a href={url}>game</a>
          </li>
          <li className="music">
            <a href={url}>music</a>
          </li>
          <li className="video">
            <a href={url}>video</a>
          </li>
          <li className="novel">
            <a href={url}>novel</a>
          </li>
        </ul>
      </div>
    );
  }
}
