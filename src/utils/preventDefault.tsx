import React from 'react';
import { getValue } from './PickFromSynteticEvent'

function preventDefault<T extends (e: any) => void>(fn: T) {
   return <E extends React.SyntheticEvent<any>>(e: E) => {
      e.preventDefault();
      fn(e);
   }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
   return <E extends React.SyntheticEvent<any>>(e: E) => {
      e.stopPropagation();
      fn(e);
   }
}

function NotStandartLInk(props: any) {
   return (
      <a onClick={preventDefault(stopPropagation(props.onClick))}>HEllo</a>
   )
}

// получить значение из инпута
interface InputProps {
   onChange: (value: string) => void;
   value: string;
}
function Input(props: InputProps) {
   return (
      <input value={props.value} onChange={preventDefault(stopPropagation(getValue(props.onChange)))} />
   )
}