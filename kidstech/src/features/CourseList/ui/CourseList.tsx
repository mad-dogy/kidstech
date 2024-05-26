import { memo } from 'react';

import { CourseCard } from '@/entities/Course';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useCourseList } from '../model/hooks/useCourseList';
import cls from './CourseList.module.scss';
import { Grid } from '@/shared/ui/Grid';

type Props = {
  className?: string;
  selectedTagId?: string
}

export const CourseList = memo((props: Props) => {
  const { className, selectedTagId } = props;

  const { courses } = useCourseList(selectedTagId);
  
  return (
    <Grid className={classNames(cls.CourseList, {}, [className])} templateColumns={`repeat(${3}, 1fr)`} gap={18}>
      {courses?.map(item => <CourseCard key={item.id} item={item}/>)}
    </Grid>
  );
})