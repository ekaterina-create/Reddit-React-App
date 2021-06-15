import React, { useState } from 'react';
import { Post } from '../../../Post';
import styles from './cardcontent.less';
import { UserInfo } from './UserInfo';


interface ICardContentProps {
  title?: string;
  author?: string;
}

export function CardContent({ title, author }: ICardContentProps) {
  const [isModalOpen, SetIsModalOpen] = useState(false);


  return (
    <div className={styles.cardContent}>
      <UserInfo author={author} />
      <h2 className={styles.title}>
        <a href='#post-link' className={styles.postlink} onClick={() => { SetIsModalOpen(true) }}>{title}</a>
      </h2>
      {isModalOpen && (
        <Post onClose={() => { SetIsModalOpen(false)}} title={title} author={author}/>
      )}
    </div>

  );
}

