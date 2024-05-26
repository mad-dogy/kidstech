import { CourseSearch } from '@/widgets/CourseSearch';
import { Page } from '@/widgets/Page';

import cls from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Page className={cls.HomePage}>
      <CourseSearch />
    </Page>
  );
};
