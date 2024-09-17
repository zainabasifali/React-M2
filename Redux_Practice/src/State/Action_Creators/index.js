export const deposit_money = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
            })
    }
}
export const withDraw_money = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'withDraw',
            payload:amount
            })
    }
}