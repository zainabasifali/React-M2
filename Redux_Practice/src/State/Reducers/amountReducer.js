const amountReducer = (state=0,action)=>{
    if(action.type == 'deposit'){
        return state + action.payload
    }
    else if(action.type == 'withDraw'){
        if(state == 0){
            return state
        }
        return state - action.payload
    }
    else {
        return state
    }
}
export default amountReducer
