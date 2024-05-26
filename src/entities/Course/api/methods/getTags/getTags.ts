import { api } from '@/shared/api';

import { Tag } from '../../../model/types/course.entity';
import { CourseServer } from '../../types/course.server';
import { getTagsFromCourses } from '../../helpers/getTagsFromCourses';

import { ResponseDto } from './response.dto';

export const getTags = async (): Promise<Array<Tag>> => {
  const response = await api.get<Array<CourseServer>>('/courses.json');

  const serverTags = getTagsFromCourses(response.data);

  const tags = ResponseDto(serverTags);

  return tags;
};
