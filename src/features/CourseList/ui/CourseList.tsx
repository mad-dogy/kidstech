import { memo } from 'react';

import { CourseCard } from '@/entities/Course';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Grid } from '@/shared/ui/Grid';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { courseListColumnAmount } from '../model/constants/courseList';
import { useCourseList } from '../model/hooks/useCourseList';

import cls from './CourseList.module.scss';

type Props = {
  className?: string;
  selectedTagId?: string;
};

export const CourseList = memo((props: Props) => {
  const { className, selectedTagId } = props;

  const { loading, error, courses } = useCourseList(selectedTagId);

  const containerClassName = classNames(cls.CourseList, {}, [className]);

  if (loading) {
    return <Skeleton className={classNames(containerClassName, {}, [cls.loader])} />;
  }

  if (error) {
    return <div className={containerClassName}>{error}</div>;
  }

  return (
    <Grid
      className={classNames(cls.CourseList, {}, [className])}
      templateColumns={`repeat(${courseListColumnAmount}, 1fr)`}
      gap={18}
    >
      {courses?.map((item) => <CourseCard key={item.id} item={item} />)}
    </Grid>
  );
});
