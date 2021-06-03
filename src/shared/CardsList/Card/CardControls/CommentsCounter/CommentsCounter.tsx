import React from 'react';
import { IconComments } from '../../../../Icons/IconComments';


import styles from './commentscounter.less';

export function CommentsCounter() {
  return (
    <div className={styles.commentsCounter}>
      <button className={styles.commentsBtn}>
        <IconComments size={14} color={`#c4c4c4`} />
      </button>
      <span className={styles.commentsCount}>22</span>
    </div>
  );
}
