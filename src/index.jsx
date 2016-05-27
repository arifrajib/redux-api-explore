import {createStore, combineReducers} from 'redux';




/***
Define Stack Action Type
***/
const STACK_PUSH_ACTION = 'STACK_PUSH';
const STACK_POP_ACTION  = 'STACK_POP';


/***
Define Queue Action Type
***/
const QUEUE_PUSH_ACTION = 'QUEUE_PUSH';
const QUEUE_POP_ACTION  = 'QUEUE_POP';



/***
Define Action Creator
***/
function pushActionCreator(type, item){
	console.log("Creating Push Action inside 'pushActionCreator'");
	return {
		type: (type === "queue")? QUEUE_PUSH_ACTION : STACK_PUSH_ACTION,
		item
	};
}

function popActionCreator(){
	console.log("Creating Pop Action inside 'popActionCreator'");
	return {
		type: (type === "queue")? QUEUE_POP_ACTION : STACK_POP_ACTION,
	};
}





/***
Stack Reducer Function
***/
function stackReducerFunction(stack=[], action){
	console.log("inside 'Stack Reducer' function ", action.type);
	
	switch(action.type){
		case PUSH_ACTION:
			console.log("we can push item to Stack");
			stack.push(action.item);
			break;
		case POP_ACTION:
			console.log("we can pop item to Stack");
			stack.pop();
			break;
		default:
			console.log("Sorry! nothing to push or pop to Stack");
	}

	return stack;
}


/***
Queue Reducer Function
***/
function queueReducerFunction(queue=[], action){
	console.log("inside 'Queue Reducer' function ", action.type);
	
	switch(action.type){
		case PUSH_ACTION:
			console.log("we can push item to Queue");
			queue.push(action.item);
			break;
		case POP_ACTION:
			console.log("we can pop item to Queue");
			queue.shift();
			break;
		default:
			console.log("Sorry! nothing to push or pop to Queue");
	}

	return queue;
}



/***
combineReducers
***/
let reducerFunction = combineReducers({
	stack: stackReducerFunction,
	queue: queueReducerFunction
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
console.log("Push Item 1");
store.dispatch(pushActionCreator("Push Item 1"));


console.log("Push Item 2");
store.dispatch(pushActionCreator("Push Item 2"));


console.log("Push Item 3");
store.dispatch(pushActionCreator("Push Item 3"));




/**
pop Item with dispatching POP_ACTION
**/
console.log("Item Pop");
//store.dispatch(popActionCreator());

