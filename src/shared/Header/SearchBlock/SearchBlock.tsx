import React, { useContext } from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { userContext } from '../../context/usercontext';
import styles from './searchBlock.less';
import { UserBlock } from './UserBlock';



export function SearchBlock() {
  const {data, loading} = React.useContext(userContext);;

   return (
      <div className={styles.searchblock}>
         <input className={styles.input} type="text" placeholder="Поиск"/>
         <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
      </div>

   )
}