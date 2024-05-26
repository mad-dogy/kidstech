import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Tag } from '@/entities/Course';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { useTagsList } from '../../model/hooks/useTagsList';
import { TagsListItem } from '../TagsListItem/TagsListItem';

import cls from './TagsList.module.scss';

type Props = {
  className?: string;
  selectedTagId: string;
  onTagChange?: (tag: Tag) => void;
};

export const TagsList = memo((props: Props) => {
  const { className, selectedTagId, onTagChange } = props;

  const { tags, error, loading } = useTagsList();

  const containerClassName = classNames(cls.TagsList, {}, [className]);

  if (loading) {
    return <Skeleton className={containerClassName} />;
  }

  if (error) {
    return <div className={containerClassName}>{error}</div>;
  }

  return (
    <Card className={containerClassName}>
      {tags?.map((item) => (
        <TagsListItem
          key={item.id}
          item={item}
          onTagChange={onTagChange}
          selectedTagId={selectedTagId}
        />
      ))}
    </Card>
  );
});
