import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ChangeButtonColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        backgroundColor: "",
      },
      history: [],
    };
  }

  handleClick() {
    const history = this.state.history;
    const colors = ["red", "blue", "green", "black", "orange"];
    if (this.state.colors.backgroundColor === "blue") {
      this.setState({
        colors: {
          backgroundColor: "green",
        },
        history: history.concat(["green"]),
      });
      return;
    }
    let a = Math.floor(Math.random() * 5);
    this.setState({
      colors: {
        backgroundColor: colors[a],
      },
      history: history.concat([colors[a]]),
    });
  }

  render() {
    let styles;
    return (
      <div className="container">
        <h1> Random Color Generator </h1>
        <p>Click on the button to generate random colors</p>
        <button
          className="btn"
          style={this.state.colors}
          onClick={() => this.handleClick()}
        >
          Colors
        </button>
        <p>
          Generated Color:
          {this.state.history.map((color) => {
            styles = {
              color: color,
            };
            return <span style={styles}>{color + ", "}</span>;
          })}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ChangeButtonColor />, document.getElementById("root"));
