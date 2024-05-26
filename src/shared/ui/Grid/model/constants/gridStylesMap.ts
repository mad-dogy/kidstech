import { GridAlign, GridGap, GridJustify } from '../types/grid';

import cls from './gridStyles.module.scss';

export const justifyClasses: Record<GridJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
};

export const alignClasses: Record<GridAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
  stretch: cls.stretch
};

export const gapClasses: Record<GridGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  18: cls.gap18,
  24: cls.gap24,
  32: cls.gap32
};
