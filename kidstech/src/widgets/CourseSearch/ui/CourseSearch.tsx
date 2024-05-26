import { memo, useCallback, useState } from 'react';

import { CourseList } from '@/features/CourseList';
import { TagsList } from '@/features/TagsList';
import { Tag, allThemesTagId } from '@/entities/Course';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CourseSearch.module.scss';

type Props = {
  className?: string;
};

export const CourseSearch = memo((props: Props) => {
  const { className } = props;

  const [selectedTagId, setSelectedTagId] = useState(allThemesTagId);

  const onTagChange = useCallback((tag: Tag) => {
    setSelectedTagId(tag.id);
  }, []);

  return (
    <HStack className={classNames(cls.CourseSearch, {}, [className])} gap={24}>
      <TagsList selectedTagId={selectedTagId} onTagChange={onTagChange} className={cls.tags} />
      <CourseList selectedTagId={selectedTagId} />
    </HStack>
  );
});
