import React from 'react';
import styles from './dropdown.less';
import ReactDom from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?:boolean;
  onOpen?:() => void;
  onClose?:() => void;
}
const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  const dropdownContainer = document.querySelector('#dropdown_root');
  if (!dropdownContainer) return null;
  
  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  return ReactDom.createPortal((
    
    <div className={styles.container}>
      <div onClick={handleOpen} className={styles.btn}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list}   onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  ), dropdownContainer);
}
