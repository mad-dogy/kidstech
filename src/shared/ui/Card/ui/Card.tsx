import { ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import { FlexProps } from '../../Stack/ui/Flex/Flex';
import { CardBorder, CardPadding, CardStack, CardType, CardVariant } from '../types/cardProps';
import { RootElementMap, mapBorderToClass, mapPaddingToClass } from '../constants/cardMaps';

import cls from './Card.module.scss';

type Props = {
  className?: string;
  children?: ReactNode;
  variant?: CardVariant;
  type?: CardType;
  padding?: CardPadding;
  border?: CardBorder;
  stack?: CardStack;
  fullWidth?: boolean;
  fullHeight?: boolean;
} & FlexProps;

export const Card = (props: Props) => {
  const {
    className,
    children,
    variant = 'primary',
    type = 'primary',
    padding = 0,
    border = 0,
    stack = 'vertical',
    fullWidth,
    fullHeight,
    ...otherProps
  } = props;

  const RootElement = RootElementMap[stack];

  const mods: Mods = {
    [cls.fullHeight]: fullHeight,
    [cls.fullWidth]: fullWidth
  };

  return (
    <RootElement
      className={classNames(cls.Card, mods, [
        className,
        cls[variant],
        cls[type],
        cls[mapPaddingToClass[padding]],
        cls[mapBorderToClass[border]]
      ])}
      {...otherProps}
    >
      {children}
    </RootElement>
  );
};
