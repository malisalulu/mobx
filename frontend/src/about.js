import React, { Component } from 'react'
import ReactDOM,{ render } from 'react-dom'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import Hello from './header'
import './index.scss';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
    <li key={index}>{index}-{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}



@inject('store')
@observer
class About extends Component{
  constructor(...props) {
    super(...props);
    this.state = {
    	id:1,
      value: 'coconut',
      isGoing: true,
      numberOfGuests: 2,
      temperature: '',
      data:3
    };
    this.name=this.props.store.name;

    this.changeName = this.changeName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
		this.add =this.add.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  add(num){
    this.props.store.addData(num);
  }
  changeName(event) {
    const target = event.target;
    const value = target.value;
    this.props.store.reName(value);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  // add(){
  //   let id = this.state.id;
  //   id++;
  //   this.setState({id:id});
  // }
  handleChange2(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
    	<div>
    		<h3 className="test">About</h3>
        <p id="test2" onClick={this.add.bind(this,6)}>{this.props.store.addNum}响应式store</p>
        <input type="text" value={this.name} onChange={this.changeName}/>
        <p><Link to="/about/about1">About1</Link></p>
        <p><Link to="/about/about2">About2</Link></p>
        <p><Link to="/msg">Msg</Link></p>
        <Hello />
        <p onClick={this.add}>点击加一{this.state.id}</p>
        <NumberList numbers={numbers} />
        <form onSubmit={this.handleSubmit}>
          <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>


          <label>
            Pick your favorite La Croix flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />

          <fieldset>
             <legend>输入一个摄氏温度</legend>
             <input
               value={temperature}
               onChange={this.handleChange2} />

             <BoilingVerdict
               celsius={parseFloat(temperature)} />

           </fieldset>
        </form>
    	</div>
    )
  }
}

export default About;
