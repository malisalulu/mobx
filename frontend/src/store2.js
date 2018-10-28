import {observable,action, computed, reaction} from 'mobx';


export default class Store {
	@observable addNum2=1;
	@computed get completedaddNum2() {
		return this.addNum2;
	}
	@action addData2(num){
	    this.addNum2=this.addNum2+num;
	}

}
