import React,{useRef} from 'react';
import { userContext } from '../../../context/usercontext';
import styles from './formanswer.less';

export function FormAnswer() {
  const { name } = React.useContext(userContext);
  const ref = useRef<HTMLTextAreaElement>(null);

  React.useEffect( ()=> {
    const node = ref.current
   if(node) {
     node.focus();
   }
  }, [])
 

  return (
  <form className={styles.form} action="">
    <textarea className={styles.textarea} value={`${name},`} id="" ref={ref}></textarea>
    <button className={styles.button}>Ответить</button>
  </form>
  );
}
