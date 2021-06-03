import React from 'react';
import { IconComments } from '../../../Icons/IconComments';
import { IconComplain } from '../../../Icons/IconComplain';
import { IconHide } from '../../../Icons/IconHide';
import { IconSave } from '../../../Icons/IconSave';
import { IconShare } from '../../../Icons/IconShare';
import styles from './cardmenulist.less';

interface ICardMenuListProps {
  postID :string;
}

export function CardMenuList({ postID }: ICardMenuListProps) {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <span className={styles.icon}><IconComments size={14} color={`#999999`}/></span>
       Комментарии
      </li>
      <li className={styles.item}>
        <span className={styles.icon}><IconShare size={14} /></span>
       Поделиться
      </li>
      <li className={styles.item} onClick={() => console.log(postID)}>
        <span className={styles.icon}><IconHide size={14}/></span>
       Скрыть
      </li>
      <li className={styles.item}>
        <span className={styles.icon}><IconSave size={14}/></span>
       Сохранить
      </li>
      <li className={styles.item}>
        <span className={styles.icon}><IconComplain size={14}/></span>
        Пожаловаться
      </li>
      <li className={styles.item}>
        Закрыть
      </li>
    </ul>
  );
}
