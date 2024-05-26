import { FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexWrap } from '../types/flex';

import cls from './flexStyles.module.scss';

export const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
};

export const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
};

export const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
};

export const wrapClasses: Record<FlexWrap, string> = {
  nowrap: cls.nowrap,
  wrap: cls.wrap
};

export const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32
};
