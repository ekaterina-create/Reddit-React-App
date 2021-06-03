import React, { ChangeEvent, FormEvent,useState } from 'react'
import { commentContext } from '../../context/commentContext';
import { userContext } from '../../context/usercontext';
import FormControls from '../FormControls/FormControls';
import styles from './commentform.less';

interface ICommentFormProps {
   buttonText?:string;
}

function CommentForm( props:ICommentFormProps ) {
  const { buttonText } = props;
  const { value, onChange } = React.useContext(commentContext)
  const { name } = React.useContext(userContext);

  function handleChange (event:ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }
  function handleSubmit (event: FormEvent) {
    event.preventDefault();
     console.log(value)
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} name="comment" value={value} onChange={handleChange} placeholder={`${name},оставьте Ваш комментарий...`}></textarea>
      <div className={styles.commentcontrols}>
      <FormControls/>
      <button type="submit" className={styles.button}>{ buttonText }</button>
      </div>
      
    </form>
  )
}

export default CommentForm
