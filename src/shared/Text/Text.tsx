import React from 'react';
import styles from './text.less';
import classNames from 'classnames'

export enum Ecolor {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  greyF3 = 'greyF3',
  greyf4 = 'greyf4',
  greyD9 = ' greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
  children?: React.ReactNode;
  size: Tsizes;
  mobileSize?: Tsizes;
  tabletSize?: Tsizes;
  desktopSize?: Tsizes;
  color?: Ecolor;
}

export function Text({ As = "span", color = Ecolor.green, children, size, mobileSize, tabletSize, desktopSize }: ITextProps) {
  const classes = classNames(
    styles[`s${size}`],
    styles[`${color}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },

  );
 
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
