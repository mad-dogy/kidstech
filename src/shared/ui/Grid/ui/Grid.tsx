import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import {
  GridAlign,
  GridAutoColumns,
  GridAutoRows,
  GridGap,
  GridJustify
} from '../model/types/grid';
import { alignClasses, gapClasses, justifyClasses } from '../model/constants/gridStylesMap';

import cls from './Grid.module.scss';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type GridProps = DivProps & {
  className?: string;
  children?: ReactNode;
  gap?: GridGap;
  templateColumns?: string;
  templateRows?: string;
  autoColumns?: GridAutoColumns;
  autoRows?: GridAutoRows;
  templateAreas?: string;
  alignItems?: GridAlign;
  justifyContent?: GridJustify;
};

export const Grid = memo((props: GridProps) => {
  const {
    className,
    children,
    gap,
    templateColumns,
    templateRows,
    autoColumns,
    autoRows,
    templateAreas,
    alignItems = 'start',
    justifyContent = 'start',
    style,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justifyContent],
    alignClasses[alignItems],
    gap && gapClasses[gap]
  ];

  const mods: Mods = {};

  return (
    <div
      className={classNames(cls.Grid, mods, classes)}
      style={{
        ...style,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridAutoColumns: autoColumns,
        gridAutoRows: autoRows,
        gridTemplateAreas: templateAreas
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
});
