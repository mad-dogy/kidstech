import { TagServer } from '../types/course.server';
import { Tag } from '../../model/types/course.entity';

export const TagDto = (tagServer: TagServer): Tag => {
  return {
    id: tagServer,
    name: tagServer
  };
};
