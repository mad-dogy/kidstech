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
      <div className={cls.imageContainer} style={{ backgroundColor: item.bgColor }}>
        <img src={item.image} alt={`image ${item.name}`} className={cls.image} />
      </div>
      <div className={cls.name}>
        {item.name}
      </div>
    </div>
  );
}