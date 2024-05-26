import { classNames } from '@/shared/lib/classNames/classNames';
import { Tag } from '@/entities/Course';

import { useTagsList } from '../../model/hooks/useTagsList';
import { TagsListItem } from '../TagsListItem/TagsListItem';

import cls from './TagsList.module.scss';
import { memo } from 'react';
import { Card } from '@/shared/ui/Card';

type Props = {
  className?: string;
  selectedTagId: string;
  onTagChange?: (tag: Tag) => void;
}

export const TagsList = memo((props: Props) => {
  const { className, selectedTagId, onTagChange } = props;

  const { tags } = useTagsList();

  return (
    <Card className={classNames(cls.TagsList, {}, [className])}>
      {tags?.map(item => (
        <TagsListItem key={item.id} item={item} onTagChange={onTagChange} selectedTagId={selectedTagId} />
      ))}
    </Card>
  );
});
