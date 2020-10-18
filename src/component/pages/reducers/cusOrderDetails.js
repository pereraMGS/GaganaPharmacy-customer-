import { ACTION_TYPE } from "../action/cusOrderDetails";
const initialState = {
 list:[]
}

export const cusOrderDetails = (state = initialState, action) => {
 switch(action.type){
   case ACTION_TYPE.FETCH_ALL:
    return{
     ...state,
     list:[...action.paylood]
    }

   default:
    return state;
 }
}