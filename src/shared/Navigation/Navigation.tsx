import React from 'react';
import styles from './navigation.less';

export function Navigation() {
  return (
    <ul className={styles.list}>
       <li className={styles.item}>Просмотренное</li>
       <li className={styles.item}>Сохраненное</li>
    <li className={styles.item}>Мои посты</li>
    </ul>
  );
}
