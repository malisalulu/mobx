import React, { Component } from 'react'
import ReactDOM,{ render } from 'react-dom'
class Detail extends Component{
  constructor(...props) {
    super(...props);
    this.state = {

    }

  }
  componentDidMount() {
    var id=this.props.match.params.id;
    var type=this.props.match.params.type;
    console.log(id,type)
  }
  render() {
    return (
    	<h3>详情</h3>
    )
  }
}

export default Detail
