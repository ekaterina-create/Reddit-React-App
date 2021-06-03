import React, {useState} from 'react';
import { userContext } from '../../context/usercontext';
import { IconComments } from '../../Icons/IconComments';
import { IconComplain } from '../../Icons/IconComplain';
import { IconShare } from '../../Icons/IconShare';
import CommentForm from '../CommentForm/CommentForm';
import styles from './commentitem.less';
import { FormAnswer } from './FormAnswer';

export function CommentItem() {
  const { iconImg, name } = React.useContext(userContext);
  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);

  React.useEffect(() => {
    isAnswerFormOpen
  }, [])

  
  return (
    <div className={styles.comment}>
      <div className={styles.userinfo}>
        <div className={styles.avatar}>
          <img src={iconImg} alt="avatar" />
        </div>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.time}>{new Date().toLocaleString()}</span>
      </div>
      <p className={styles.text}>North of the Central Lowland, extending for almost 1,600 kilometers, are the five Great Lakes, which the United States shares with Canada. The lakes are considered to contain about half of the world’s fresh water. 
      West of the Central Lowland are the Great Plains. They are stopped by the Rocky Mountains. </p>
      <div className={styles.buttonBlock}>
      <button className={styles.button} onClick={() => { setIsAnswerFormOpen(true) }}><IconComments size={14} color={`#999999`}/>Ответить</button>
     
      <button className={styles.button}><IconShare size={14}/>Поделиться</button>
      <button className={styles.button}><IconComplain size={14}/>Пожаловаться</button>
      </div>
      {isAnswerFormOpen && (
      <FormAnswer/>
      )}
    </div>
  );
}
