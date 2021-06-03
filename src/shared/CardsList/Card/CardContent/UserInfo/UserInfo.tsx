import React from 'react';

import styles from './userinfo.less';

interface IUserInfotProps {
  title?:string;
  author?:string;
  
}

export function UserInfo({author} :IUserInfotProps) {
 
  return (
  <div className={styles.metaData}>
      <div className={styles.userinfo}>
         <img className={styles.avatar} src="https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=400x300" 
         alt="аватар"/>
           <a href="#user" className={styles.username}>{author}</a>
      </div>
     <span className={styles.createdAt}>
      <span className={styles.published}>опубликовано</span> 4 часа назад</span>
    </div>
  );
}

