import { CourseSearch } from '@/widgets/CourseSearch';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './HomePage.module.scss';

type Props = {
  className?: string;
}

export const HomePage = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.HomePage, {}, [className])}>
      <CourseSearch />
    </div>
  );
}