import React, { ChangeEvent, FormEvent} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CommentForm from '../Post/CommentForm/CommentForm';
import { updateComment } from '../redux/actionsCreators/updateComment';
import { RootState } from '../redux/store';



function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText)
  
  const dispatch = useDispatch();

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }
  
  function handleSubmit (event: FormEvent) {
    event.preventDefault();
    
  }


  return (
<div>gg</div>
   // <CommentForm
   // value={value}
   // onChange={handleChange}
   // onSubmit={handleSubmit}
   // />
  )
}

export default CommentFormContainer