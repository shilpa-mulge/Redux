const redux=require('redux');
const countReducer=(state={counter:0},action)=>{
 
 if(action.type==='increment'){
    return {
        counter:state.counter+1
    };
}
if(action.type==='increment2'){
    return {
        counter:state.counter+2
    };
}
if(action.type==='decrement'){
    return{
        counter:state.counter-1
    }
}
if(action.type==='decrement2'){
    return{
        counter:state.counter-2
    }
}
return state;
};

const store=redux.createStore(countReducer);
 
const counterSubscriber=()=>{
const latestState=store.getState();
console.log(latestState)
};

store.subscribe(counterSubscriber)
store.dispatch({type:'increment'})
store.dispatch({type:'increment2'})

store.dispatch({type:'decrement2'})
store.dispatch({type:'decrement'})