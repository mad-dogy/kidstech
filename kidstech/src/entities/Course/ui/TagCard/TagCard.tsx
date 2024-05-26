import { classNames } from '@/shared/lib/classNames/classNames';

import { Tag } from '../../model/types/course.entity';
import cls from './TagCard.module.scss';

type Props = {
  className?: string;
  item: Tag
}

export const TagCard = (props: Props) => {
  const { className, item } = props;

  return (
    <div className={classNames(cls.TagCard, {}, [className])}>
      {item.name}
    </div>
  );
}