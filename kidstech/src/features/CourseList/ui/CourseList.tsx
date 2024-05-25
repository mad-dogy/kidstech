import { memo } from 'react';

import { CourseCard, Tag } from '@/entities/Course';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useCourseList } from '../model/hooks/useCourseList';
import cls from './CourseList.module.scss';

type Props = {
  className?: string;
  selectedTag?: Tag
}

export const CourseList = memo((props: Props) => {
  const { className, selectedTag } = props;

  const { courses } = useCourseList(selectedTag);
  
  return (
    <div className={classNames(cls.CourseList, {}, [className])}>
      {courses?.map(item => <CourseCard key={item.id} item={item}/>)}
    </div>
  );
})