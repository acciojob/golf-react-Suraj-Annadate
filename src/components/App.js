import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };

        // Bind event handlers to the class instance
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Event handler for the "Start" button click
    buttonClickHandler() {
        this.setState({ renderBall: true });

        // Add the event listener for the right arrow key when the game starts
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Event handler for the right arrow key
    handleKeyDown(event) {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => ({
                ballPosition: {
                    left: (parseInt(prevState.ballPosition.left) + 5) + "px",
                },
            }));
        }
    }

    // Remove the event listener when the component unmounts
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div className="ball" style={this.state.ballPosition}></div>
                ) : (
                    <button className="start" onClick={this.buttonClickHandler}>
                        Start
                    </button>
                )}
            </div>
        );
    }
}

export default App;