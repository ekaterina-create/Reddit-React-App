import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { CardMenuList } from '../CardMenuList';

import styles from './cardmenu.less';
import { CardMenuButton } from './CardMenuButton';

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<CardMenuButton/>}>
      <CardMenuList postID="1234"/>
      </Dropdown>
    </div>
  );
}

