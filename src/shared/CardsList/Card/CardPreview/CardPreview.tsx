import React from 'react';
import styles from './cardpreview.less';


interface ICardPreview{
  thumbnail:string;
}
 
  

export function CardPreview({ thumbnail="http://lorempixel.com/400/200/" }: ICardPreview) {
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg} src={thumbnail} alt=""/>
 </div>
  );
}
