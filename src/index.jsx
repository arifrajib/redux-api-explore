import {createStore} from 'redux';


/***
Define Action Type
***/
const PUSH_ACTION = 'PUSH';
const POP_ACTION  = 'POP';


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
			console.log("we can pop item and return the new state");
			state.pop();
			break;
		default:
			console.log("Sorry! nothing to push or pop return default state");
	}

	return state;
}



/***
Default State
***/
let defaultState = [];


/***
Create Store
***/
let store = createStore(reducerFunction, defaultState);

console.log("Default Store created: ", store.getState());


/***
Subscribe listener
***/
let unSubscribe = store.subscribe(()=> console.log(store.getState()));


/**
push Item with dispatching PUSH_ACTION
**/
store.dispatch(pushActionCreator("Push Item 1"));
console.log("Push Item 1");


store.dispatch(pushActionCreator("Push Item 2"));
console.log("Push Item 2");


store.dispatch(pushActionCreator("Push Item 3"));
console.log("Push Item 3");



/**
pop Item with dispatching POP_ACTION
**/
store.dispatch(popActionCreator());
console.log("Item poped");
