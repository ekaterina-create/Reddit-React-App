import React from 'react'
import IconAnon from './IconAnon';
import { IconComments } from './IconComments';
import { IconComplain } from './IconComplain';
import { IconHide } from './IconHide';
import { IconSave } from './IconSave';
import { IconShare } from './IconShare';


const Icons: { [key in keyof typeof EIcons]: any } = {
   comment: IconComments,
   share: IconShare,
   hide: IconHide,
   save: IconSave,
   complain: IconComplain,
   anon: IconAnon,
}

interface IIconProps {
   size: number,
   name: EIcons,
}

export enum EIcons {
   comment = 'comment',
   share = 'share',
   hide = 'hide',
   save = 'save',
   complain = 'complain',
   anon = 'anon',
}

export function UniversIcon({size, name}: IIconProps) {
   const IconName = Icons[name];
   return <IconName size={size}/>;
}
