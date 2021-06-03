import React from 'react';
import styles from './cardcontrols.less';
import { CommentsCounter } from './CommentsCounter';
import { SaveBtn } from './SaveBtn';
import { SharedBtn } from './SharedBtn';
import { VoicesCounter } from './VoicesCounter';

export function CardControls() {
  return (
  <div className={styles.cardcontrols}>
    <VoicesCounter/>
    <CommentsCounter/>
      <div className={styles.btngroup}>
      <SharedBtn/>
      <SaveBtn/>
      </div>
    </div>
  );
}
