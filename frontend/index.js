import React from "react";
import ReactDOM,{ render } from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import {Provider,observer, inject} from 'mobx-react';
import {observable, action, autorun, computed} from 'mobx';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Routers from './src/route';
import Store  from './src/store'
import Store2  from './src/store2'

var store=new Store();
var store2=new Store2();
const storeAll={store,store2};
autorun(() => {
  console.log(store.addNum,store.name);
});

ReactDOM.render(
	<LocaleProvider locale={zh_CN}>
	  	<Provider {...storeAll}>
	    		<Routers/>
	   	</Provider>
   </LocaleProvider>,
  document.getElementById('app')
);
