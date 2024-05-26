import { FC } from 'react';

import { HStack, HStackProps } from '../../Stack/ui/HStack/HStack';
import { VStack, VStackProps } from '../../Stack/ui/VStack/VStack';
import { CardBorder, CardPadding, CardStack } from '../types/cardProps';

export const RootElementMap: Record<CardStack, FC<HStackProps | VStackProps>> = {
  horizontal: HStack,
  vertical: VStack
};

export const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  4: 'gap_4',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
  32: 'gap_32'
};

export const mapBorderToClass: Record<CardBorder, string> = {
  0: 'border_0',
  12: 'border_12',
  18: 'border_18',
};
