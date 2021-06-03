import React from 'react';


function Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
   return (
      <input value={value} onChange={getValue(onChange)} />

   )
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
   return (
      <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
   )
}

function PickFromSynteticEvent<T extends HTMLElement>() {
   return <K extends keyof T>(key: K) =>
      <E extends ((t: T[K]) => void)>(fn: E) =>
         (e: React.SyntheticEvent<T>) =>
            fn(e.currentTarget[key]);

}

export const getValue = PickFromSynteticEvent<HTMLInputElement>()('value');
export const getChecked = PickFromSynteticEvent<HTMLInputElement>()('checked');