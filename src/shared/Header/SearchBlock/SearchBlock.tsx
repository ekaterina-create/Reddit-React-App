import React, { useContext } from 'react';
import { userContext } from '../../context/usercontext';
import styles from './searchBlock.less';
import { UserBlock } from './UserBlock';



export function SearchBlock() {
   const {iconImg, name} = useContext(userContext)
   return (
      <div className={styles.searchblock}>
         <input className={styles.input} type="text" placeholder="Поиск"/>
         <UserBlock avatarSrc={iconImg} username={name} />
      </div>

   )
}