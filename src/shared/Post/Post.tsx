import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import { UserInfo } from '../CardsList/Card/CardContent/UserInfo';
import CommentForm from './CommentForm/CommentForm';


import { CommentItem } from './CommentItem';
import styles from './post.less';


interface IPostProps {
  onClose?: () => void;
  title?: string;
  author?: string;
  }

export function Post({ onClose, title, author }: IPostProps) {
  const modalContainer = document.querySelector('#modal_root');
  if (!modalContainer) return null;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ReactDom.createPortal((
    <div className={styles.post} ref={ref}>
      <div className={styles.postcontent}>
        <button className={styles.close} onClick={() => { onClose?.() }}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z" fill="#ADADAD" />
          <path d="M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z" fill="#ADADAD" />
        </svg>
        </button>
        <h2 className={styles.title}>{title}</h2>
        <UserInfo author={author} />
        <p className={styles.text}>SpaceX was formed by entrepreneur Elon Musk in the hopes of revolutionizing the aerospace industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket, a two-stage liquid-fueled craft designed to send small satellites into orbit. The Falcon 1 was vastly cheaper to build and operate than its competitors, a field largely populated by spacecraft built by publicly owned and government-funded companies such as Lockheed Martin and Boeing. Part of the rocket’s cost-effectiveness was made possible by the SpaceX-developed Merlin engine, a cheaper alternative to those used by other companies. SpaceX also focused on making reusable rockets (other launch vehicles are generally made for one-time use).
        We Haven't Been to the Moon. Why?
        BRITANNICA EXPLORES
        WE HAVEN'T BEEN TO THE MOON. WHY?
        The last time a person visited the moon was in December 1972, during NASA's Apollo 17 mission. Over the decades, NASA has planned to send people back to the moon but has yet to succeed. So what happened after Apollo?
        In March 2006 SpaceX made its first Falcon 1 launch, which began successfully but ended prematurely because of a fuel leak and fire. By this time, however, the company had already earned millions of dollars in launching orders, many of them from the U.S. government. In August of that year SpaceX was a winner of a NASA competition for funds to build and demonstrate spacecraft that could potentially service the ISS after the decommissioning of the space shuttle. Falcon 1 launches that failed to attain Earth orbit followed in March 2007 and August 2008, but in September 2008 SpaceX became the first privately owned company to send a liquid-fueled rocket into orbit. Three months later it won a NASA contract for servicing the ISS that was worth more than $1 billion.</p>
      </div>
      <CommentForm/>
      <CommentItem />
    </div>
  ), modalContainer);
}
