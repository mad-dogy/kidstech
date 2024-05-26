import { useCallback, useState } from 'react';
import { CourseList } from '@/features/CourseList';
import { TagsList } from '@/features/TagsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

import cls from './CourseSearch.module.scss';
import { allThemesTagId } from '@/entities/Course';

type Props = {
  className?: string;
}

export const CourseSearch = (props: Props) => {
  const { className } = props;

  const [selectedTagId, setSelectedTagId] = useState(allThemesTagId);

  const onTagChange = useCallback((tagId: string)=>{
    setSelectedTagId(tagId);
  }, []);

  return (
    <HStack className={classNames(cls.CourseSearch, {}, [className])} gap={24}>
      <div className={cls.tagsContainer}>
        <TagsList selectedTagId={selectedTagId} onTagChange={onTagChange} className={cls.tags} />
      </div>
      
      <CourseList selectedTagId={selectedTagId} />
    </HStack>
  );
}
