import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    console.log("Clock", "constructor");
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log("Clock", "componentDidMount");
    this.timeHandler = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    /**
     *  ComponentWillUnmount
     *  lifecycle yang dijalankan ketika component menghilang (udah gak muncul) dari DOM
     *  lifecycle ini digunakan untuk menghemat alokasi memori dari app dan improve performance
     * 
     */
    
    console.log("Clock", "componentWillUnmount");
    clearInterval(this.timeHandler);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  
  render() {
    return <div>It is {this.state.date.toLocaleTimeString()}.</div>;
  }
}

export default Clock
