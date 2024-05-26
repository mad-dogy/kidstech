import { classNames } from '@/shared/lib/classNames/classNames';

import { useTagsList } from '../../model/hooks/useTagsList';
import { TagsListItem } from '../TagsListItem/TagsListItem';

import cls from './TagsList.module.scss';

type Props = {
  className?: string;
  selectedTagId: string;
  onTagChange?: (tagId: string) => void;
}

export const TagsList = (props: Props) => {
  const { className, selectedTagId, onTagChange } = props;

  const { tags } = useTagsList();

  return (
    <div className={classNames(cls.TagsList, {}, [className])}>
      {tags?.map(item => (
        <TagsListItem item={item} key={item.id} onTagChange={onTagChange} selectedTagId={selectedTagId} />
      ))}
    </div>
  );
}
