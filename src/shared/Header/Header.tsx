import React from 'react';
import s from './header.less';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';


export function Header() {
    return (
    <header className={s.header}>
            <SearchBlock />
              <ThreadTitle />
            <SortBlock />
    </header>

  );
}
