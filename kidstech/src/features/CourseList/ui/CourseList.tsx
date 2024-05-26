import { memo } from 'react';

import { CourseCard } from '@/entities/Course';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useCourseList } from '../model/hooks/useCourseList';
import cls from './CourseList.module.scss';

type Props = {
  className?: string;
  selectedTagId?: string
}

export const CourseList = memo((props: Props) => {
  const { className, selectedTagId } = props;

  const { courses } = useCourseList(selectedTagId);
  
  return (
    <div className={classNames(cls.CourseList, {}, [className])}>
      {courses?.map(item => <CourseCard key={item.id} item={item}/>)}
    </div>
  );
})