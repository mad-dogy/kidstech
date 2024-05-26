import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';

import { Course } from '../../model/types/course.entity';

import cls from './CourseCard.module.scss';

type Props = {
  className?: string;
  item: Course;
};

export const CourseCard = memo((props: Props) => {
  const { className, item } = props;

  return (
    <Card className={classNames(cls.CourseCard, {}, [className])} border={18}>
      <HStack
        className={cls.imageContainer}
        style={{ backgroundColor: item.bgColor }}
        align="center"
        justify="center"
        max
      >
        <img src={item.image} alt={`image ${item.name}`} className={cls.image} />
      </HStack>

      <div className={cls.name}>{item.name}</div>
    </Card>
  );
});
