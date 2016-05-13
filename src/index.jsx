import {createStore} from 'redux';


/***
Define Action Type
***/
const PUSH_ACTION = 'PUSH';
const POP_ACTION = 'POP';


/***
Define Action Creator
***/
function pushActionCreator(item){
	console.log("Creating Push Action inside 'pushActionCreator'");
	return {
		type: PUSH_ACTION,
		item
	};
}

function popActionCreator(){
	console.log("Creating Push Action inside 'popActionCreator'");
	return {
		type: POP_ACTION
	};
}



/***
Reducer Function
***/
function pushReducer(state, action){
	console.log("inside 'pushReducer' function");
	if(action.type === PUSH_ACTION){
		console.log("yes! we can push item and return the new state");
		state.push(action.item);
	}
	else{
		console.log("Sorry! not to 'ADD' return default state");
	}
	return state;
}



