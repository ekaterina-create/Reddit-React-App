import React,{useRef, useEffect, FormEvent, useState, ChangeEvent} from 'react';
import styles from './formanswer.less';

interface IFormAnswerProps {
  onClose?:() => void;
}

export function FormAnswer(props : IFormAnswerProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');
  

  useEffect( ()=> {
      if(ref.current) {
    ref.current.focus();
    

   }
  }, [])

 function handleChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value)
 }
   function handleSubmit(e:FormEvent) {   
     e.preventDefault()
    props.onClose?.();
     }
 
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit} >
      <textarea className={styles.textarea} value={value}  ref={ref} onChange={handleChange} ></textarea>
      <button className={styles.button}>Ответить</button>
    </form>
    );
}
