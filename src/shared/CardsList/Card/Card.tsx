import React from 'react';
import styles from './card.less';
import { CardContent } from './CardContent';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';

interface ICardProps {
  title?: string;
  author?:string;
  thumbnail:string;
}


export function Card({ title, author,thumbnail='http://lorempixel.com/400/200/'}:ICardProps) {


  return (
    <li className={styles.card} >
     <CardContent title={title} author={author} thumbnail={thumbnail}/>
     <CardMenu/>
     <CardPreview thumbnail={thumbnail}/>
     <CardControls/>
    </li>
  );
}
