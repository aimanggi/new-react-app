import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Contructor dijalankan pertama kali saat component ini dimuat di browser
    console.log("Ini constructor")
    this.state = {
      name: "",
      id: "",
      datas: [],
      data: {
        title: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  componentDidMount() {
    /**
     *  ComponentDidMount
     *  lifecycle yang pertama kali dijalankan
     *  dari urutannya ComponentDidMount dijalankan setelah render
     */

    const { id } = this.props;
    console.log("ini componentDidMount", id);


    document.title = "yuhuu";
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       datas: json,
    //     });
    //   });

    this.iniFunction(id);
  }

  componentDidUpdate(prevProps, prevState) {
    /**
     *  ComponentDidUpdate
     *  lifecycle yang dijalankan ketika ada update yang diminta
     * 
     *  @param  {any}   prevProps   props sebelumnya
     *  @param  {any}   prevState   state sebelumnya
     * 
     */

    console.log("ini componentDidUpdate", prevProps);
    console.log("ini yg baru", this.props);

    // harus membandingkan dengan state / props sebelumnya
    // hal ini dilakukan agar tidak terjadi infinite loop / merender hal yg tidak berguna haha
    if (prevProps.id !== this.props.id) {
      this.iniFunction(this.props.id);
    }
  }

  iniFunction = (id) => {
    // console.log(`render id ${id}`);
    this.setState({
      id: id,
    });
  };

  render() {
    console.log("class", this.state);
    const { data, datas } = this.state;
    const { id } = this.props;

    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <div>id: {id}</div>
        <div>name: {data.title}</div>
        {datas.map((data) => {
          return <div key={data.id}>{data.title}</div>;
        })}
      </div>
    );
  }
}

export default ClassComponent;
