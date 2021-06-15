import { ActionCreator, AnyAction } from 'redux';
import { SET_TOKEN } from '../store';

export type SetTokenAction = {
   type:typeof SET_TOKEN,
   token: string,
}

export const setToken:ActionCreator<SetTokenAction> = (token: string) => ({
   type:SET_TOKEN,
   token,
})