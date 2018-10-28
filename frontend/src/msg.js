import React,{ Component }from 'react'
import ReactDOM,{ render } from 'react-dom'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
function WarningBanner(props){//warn 的值条件渲染。如果 warn 的值是 false，则组件不会渲染
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Warning!
		</div>
	);
}
function Mailbox(props) {//与运算
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length >2 &&
				<h2>
					You have {unreadMessages.length} unread messages.
					如果条件是 true，&& 右侧的元素就会被渲染
				</h2>
			}
		</div>
	);
}
const messages = ['React', 'Re: React', 'Re:Re: React'];

@inject('store2')
@observer
class Msg extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	id:5,
    	name:"lulu",
    	isLoggedIn: false,
    	showWarning: true
    };
		this.handleClick = this.handleClick.bind(this);//如果事件没有用箭头函数就必须在这绑定this
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.add2 =this.add2.bind(this);
  }
	add2(num){
    this.props.store2.addData2(num);
  }
	handleClick(name){
			var id=this.state.id;
			id++;
			console.log(name,id);
			this.setState({id:id});
  }
	handleLoginClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }
	handleToggleClick(){
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
  	const isLoggedIn = this.state.isLoggedIn;
  	let button = null;
    if (isLoggedIn) {//条件判断
      button = <button onClick={this.handleLogoutClick}>注销</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>登录</button>;
    }

    return (
    	<div>
    		<h3>msg</h3>
	  	<p id="test3" onClick={this.add2.bind(this,66)}>{this.props.store2.addNum2}响应式store2</p>
    		<button onClick={this.handleClick.bind(this,this.state.name)}>事件处理{this.state.id}</button>
		<Link  to={"detail/"+this.state.id+"/food"}>第{this.state.id}条</Link>
	  	{button}
	  	<div> The user is <b>{isLoggedIn ? '是' : '不是'}</b>登录了(三目运算)</div>
    		<Mailbox unreadMessages={messages}/>
    		<button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
    		<WarningBanner warn={this.state.showWarning} />
    	</div>
    )
  }
}

export default Msg;
