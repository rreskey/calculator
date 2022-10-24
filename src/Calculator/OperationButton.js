import { ACTIONS } from "../App"

export default function OperationButton({dispatch, operation}) {
    return <div className='number utils' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
        {operation}
    </div>
}