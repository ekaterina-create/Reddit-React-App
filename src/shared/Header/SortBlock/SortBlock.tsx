import React from 'react';
import { Dropdown } from '../../Dropdown';
import IconRocket from '../../Icons/IconRocket/IconRocket';
import styles from './sortblock.less';

export function SortBlock() {
  return (
   <div className={styles.sortBlock}>
{/* <Dropdown button={<button className={styles.button}><IconRocket/>Лучшие
<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 8L-3.16551e-07 0.712163L0.757932 2.72853e-07L7 6.49874L13.2421 1.36425e-06L14 0.712164L7 8Z" fill="#CC6633"/>
</svg></button>}>
     выпадающее меню
      </Dropdown> */}
   </div>
  );
}
