import React, { useContext } from 'react';
import { postsContext } from '../context/postscontext';
import { Card } from './Card/Card';
import styles from './cardslist.less';

export function CardsList() {
  const {list} = useContext(postsContext);
    
  const cardslist = list && list.map((item) => <Card  key ={item.data.id} {...item.data}/>)
  
  return (
   <ul className={styles.cardlist}>
    {cardslist}
   </ul>
  );
}
