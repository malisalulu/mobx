import {observable,action, computed, reaction} from 'mobx';


export default class Store {
	@observable name = "lilu";
	@observable addNum=1;
	@computed get completedaddNum() {
		return this.addNum;
	}
	@action reName(inputName) {
		this.name=inputName;
	}
	@action addData(num){
		this.addNum=this.addNum+num;
	}
	@action authenticate() {
	   return new Promise((resolve, reject) => {
	     this.authenticating = true;
	     setTimeout(action(() => {
	       this.authenticated = !this.authenticated;
	       this.authenticating = false;
	       resolve(this.authenticated);
	     }), 100);
	   });
	}
}
