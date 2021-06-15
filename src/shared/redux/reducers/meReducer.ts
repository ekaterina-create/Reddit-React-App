import { initialState } from './../store';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, IUserData } from './../actionsCreators/meRequest';
import { Reducer } from 'redux';
import { MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction } from '../actionsCreators/meRequest';

export type MeState = {
   loading: boolean;
   error: string;
   data:IUserData;
}

type MeActions =
   MeRequestAction
   | MeRequestSuccessAction
   | MeRequestErrorAction;

export const meReducer: Reducer<MeState,MeActions> = (state = initialState.me, action) => {
   switch (action.type) {
      case ME_REQUEST:
         return {
            ...state,
            loading: true,
         };
      case ME_REQUEST_ERROR:
         return {
            ...state,
            error: action.error,
            loading: false,
         };
      case ME_REQUEST_SUCCESS:
      return {
         ...state,
         data: action.data,
         loading: false,
      };
      default:
         return state;
   }
}