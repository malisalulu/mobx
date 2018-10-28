import React, { Component } from 'react';
import { Link,BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { DatePicker,Button } from 'antd';
// antd样式
import 'antd/dist/antd.css';
import "./App.scss"
import axios from 'axios'
axios.defaults.withCredentials = true

@inject('store','store2')
@observer
class App extends Component {
  constructor(...props) {
    super(...props);
    this.state={
      name:this.props.store.name,
      data:3
    }
    this.changeName = this.changeName.bind(this);
    this.add = this.add.bind(this);
  }
  add(num){
    this.props.store.addData(num);
  }
  changeName(event) {
    const target = event.target;
    const value = target.value;
    this.props.store.reName(value);
  }
  register(){
  	 axios.post('/users/register', {
          username: 'admin1',
          password: '1234561'
      }).then((res => {

      }))
  }
  login(){
      axios.post('/users/login', {
          username: 'admin',
          password: '123456'
      }).then((res => {

      }))
  }
  logout(){
  	axios.get('/users/logout', {}).then((res => {

      }))
  }
  
  deleteUser(){
  	 axios.post('/users/admindel', {
          username: 'admin1'
      }).then((res => {

      }))
  }
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  
  componentWillMount() {
      console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
       console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(nextProps,nextState) {
		if(nextState.data == this.state.data){
	        return false
	    }
	    return true;
  }
  componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
         console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
      <div className="App">
        <button onClick = {this.setNewNumber.bind(this)}>INCREMENT</button>
        <h3 className={`bgblue ${this.state.data>5?"big":"small"}`}>{this.state.data}</h3>
        
        <DatePicker />
        <button onClick={this.register.bind(this)}>注册接口测试</button>
        <button onClick={this.login.bind(this)}>登录接口测试</button>
        <button onClick={this.logout.bind(this)}>退出登录接口测试</button>
        <button onClick={this.deleteUser.bind(this)}>删除接口测试</button>
        <a>{this.props.store.completedaddNum}</a>
        <p onClick={this.add.bind(this,6)}>{this.props.store.addNum}响应式store</p>
        <input type="text" value={this.props.store.name} onChange={this.changeName}/>
        <h1>App</h1>
        <p><Link to="/layout">layout</Link></p>
        <div id="example"></div>
      </div>
    );
  }
}

export default App;
