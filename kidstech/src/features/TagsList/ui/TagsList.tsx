import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TagsList.module.scss';
import { useTagsList } from '../model/hooks/useTagsList';
import { TagCard } from '@/entities/Course';

type Props = {
  className?: string;
}

export const TagsList = (props: Props) => {
  const { className } = props;

  const { tags } = useTagsList()

  return (
    <div className={classNames(cls.TagsList, {}, [className])}>
      {tags?.map(item => <TagCard key={item.id} item={item}/>)}
    </div>
  );
}