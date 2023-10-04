import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      maxCount: 10,
    };
  }

  increment = () => {
    if (this.state.count < this.state.maxCount) {
      // Check if the current count is less than the maximum allowed count
      this.setState({ count: this.state.count + 1 }, () => {
        // Update the count in the component's state
        if (this.state.count === this.state.maxCount) {
          // After the state has been updated, check if it has reached the maximum value
          setTimeout(() => {
            // Using setTimeout to pop when 10 values been reached
            alert("Counter reached 10. Can't increment further.");
          }, 0);
        }
      });
    }
  };

  decrement = () => {
    // Check if the current count is greater than 0

    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 }); // Update the count in the component's state
    }
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter-heading">Counting Values</h1>{" "}
        {/* Updated the heading text */}
        <p>Current Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          disabled={this.state.count === this.state.maxCount}
        >
          +{/* Disable the '+' button when maxCount is reached */}
        </button>
        <button onClick={this.decrement} disabled={this.state.count === 0}>
          -{/* Disable the '-' button when count is 0 */}
        </button>
      </div>
    );
  }
}

export default Counter;
