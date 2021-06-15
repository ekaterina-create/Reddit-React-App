import { ActionCreator, AnyAction } from 'redux';
import { UPDATE_COMMENT } from '../store';

export type UpdateCommentAction = {
   type:typeof UPDATE_COMMENT,
   text: string,
}

export const updateComment:ActionCreator<UpdateCommentAction> = (text) => ({
   type:UPDATE_COMMENT,
   text,
})