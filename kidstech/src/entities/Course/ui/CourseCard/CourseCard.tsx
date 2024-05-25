import { classNames } from '@/shared/lib/classNames/classNames';

import { Course } from '../../model/types/course.entity';
import cls from './CourseCard.module.scss';

type Props = {
  className?: string;
  item: Course
}

export const CourseCard = (props: Props) => {
  const { className, item } = props;

  return (
    <div className={classNames(cls.CourseCard, {}, [className])}>
      {item.name}
    </div>
  );
}