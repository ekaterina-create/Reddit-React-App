import { SetTokenAction } from './actionsCreators/setToken';
import { UpdateCommentAction } from './actionsCreators/updateComment';
import { meReducer, MeState } from './reducers/meReducer';
import { Reducer } from 'redux';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './actionsCreators/meRequest';


export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const SET_TOKEN = "SET_TOKEN";

export type RootState ={
   commentText:string;
   token:string;
   me: MeState,
}

type MyActions = UpdateCommentAction
| SetTokenAction
| MeRequestAction
| MeRequestSuccessAction
| MeRequestErrorAction;

export const initialState:RootState = {
   commentText:'Привет',
   token: '',
   me: {
   loading:false,
   error: '',
   data:{},
   },
   
   
}
export const rootReducer:Reducer<RootState, MyActions> = (state = initialState, action) => {
   switch(action.type) {
   case UPDATE_COMMENT:
   return {
      ...state,
      commentText:action.text,
   }
   case SET_TOKEN:
   return {
      ...state,
      token:action.token,
   }
   case ME_REQUEST:
   case ME_REQUEST_SUCCESS:
   case ME_REQUEST_ERROR:
   return ({
      ...state,
      me:meReducer(state.me, action),
   });
   
   default:
   return state
}
}