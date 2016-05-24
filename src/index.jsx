import {createStore, combineReducers} from 'redux';


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
Stack Reducer Function
***/
function stackReducerFunction(state=[], action){
	console.log("inside 'Stack Reducer' function");
	
	switch(action.type){
		case PUSH_ACTION:
			console.log("we can push item to Stack");
			state.push(action.item);
			break;
		case POP_ACTION:
			console.log("we can pop item to Stack");
			state.pop();
			break;
		default:
			console.log("Sorry! nothing to push or pop to Stack");
	}

	return state;
}


/***
Queue Reducer Function
***/
function queueReducerFunction(state=[], action){
	console.log("inside 'Queue Reducer' function");
	
	switch(action.type){
		case PUSH_ACTION:
			console.log("we can push item to Queue");
			state.shift(action.item);
			break;
		case POP_ACTION:
			console.log("we can pop item to Queue");
			state.unshift();
			break;
		default:
			console.log("Sorry! nothing to push or pop to Queue");
	}

	return state;
}



/***
combineReducers
***/
let reducerFunction = combineReducers({
	stackReducerFunction
});




/***
Default State
***/
let defaultState = {};


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
