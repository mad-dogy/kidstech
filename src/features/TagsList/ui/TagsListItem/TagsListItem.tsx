import { memo, useCallback } from 'react';

import { Tag, TagCard } from '@/entities/Course';
import { Card } from '@/shared/ui/Card';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './TagsListItem.module.scss';

type Props = {
  item: Tag;
  selectedTagId?: string;
  onTagChange?: (item: Tag) => void;
};

export const TagsListItem = memo((props: Props) => {
  const { item, selectedTagId, onTagChange } = props;

  const onTagChangeHandler = useCallback(() => {
    onTagChange?.(item);
  }, [item, onTagChange]);

  const isItemActive = selectedTagId === item.id;

  const mods: Mods = {
    [cls.active]: isItemActive
  };

  return (
    <Card onClick={onTagChangeHandler} className={classNames(cls.TagsListItem, mods)} border={12}>
      <TagCard key={item.id} item={item} />
    </Card>
  );
});
