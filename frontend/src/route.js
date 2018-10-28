import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import App from './App.js';
import About from './about.js';
import About1 from './about1.js';
import About2 from './about2.js';
import Msg from './msg.js';
import Detail from './detail.js'
import Calculator from './Calculator.js';
import Mylayout from './layout.js';

export default class Routers extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Mylayout>
						<Route exact path="/"  component={App} />
						<Route path="/app"  component={App} />
						<Route path="/about" component={About} />
						<Route path="/about/about1" component={About1} />
						<Route path="/about/about2" component={About2} />
						<Route path="/msg" component={Msg} />
						<Route path="/detail/:id/:type" component={Detail} />
					 </Mylayout>
					 <Route path="/calculator" component={Calculator} />
				 </div>
			</HashRouter>

		)
	}
}
