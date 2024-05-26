import { useCallback, useMemo } from 'react';

import { Tag, TagCard } from '@/entities/Course';

import cls from './TagsListItem.module.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

type Props = {
  item: Tag;
  selectedTagId?: string;
  onTagChange?: (tagId: string) => void;
}

export const TagsListItem = (props: Props) => {
  const { item, selectedTagId, onTagChange } = props;

  const isItemActive = useMemo(() => selectedTagId === item.id, [item.id, selectedTagId]);

  const onTagChangeHandler = useCallback(() => {
    onTagChange?.(item.id);
  }, [item.id, onTagChange]);

  const mods: Mods = {
    [cls.active]: isItemActive
  };

  return (
    <div onClick={onTagChangeHandler} className={classNames(cls.TagsListItem, mods)} >
      <TagCard key={item.id} item={item} />
    </div> 
  );
}