import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../State/Index"
let Buy = ()=>{
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreators,dispatch)
    return(
        <div className="text-center my-4">
        <button type="button" className="btn btn-primary mx-2" onClick={()=>{actions.withDraw_money(10)}}>-</button>
        Buy Chocolate
        <button type="button" className="btn btn-primary mx-2" onClick={()=>{actions.deposit_money(100)}}>+</button>

        </div>
    )
}
export default Buy