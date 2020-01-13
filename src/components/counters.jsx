import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Render");
    const {
      onDelete,
      onIncrement,
      onDecrement,
      onReset,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
