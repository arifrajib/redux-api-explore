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
function reducerFunction(state, action){
	console.log("inside 'Reducer' function");
	
	switch(action.type){
		case PUSH_ACTION:
			console.log("we can push item and return the new state");
			state.push(action.item);
			break;
		case POP_ACTION:
			console.log("]we can pop item and return the new state");
			state.pop();
		default:
			console.log("Sorry! not to 'ADD' return default state");
	}

	return state;
}



/***
Default State
***/
let defaultState = [];


