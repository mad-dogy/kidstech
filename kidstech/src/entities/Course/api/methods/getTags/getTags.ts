import { api } from '@/shared/api';

import { Tag } from '../../../model/types/course.entity';
import { CourseServer } from '../../types/course.server';
import { ResponseDto } from './response.dto';
import { Request } from './types';
import { getTagsFromCourses } from '../../helpers/getTagsFromCourses';

export const getTags = async (request?: Request): Promise<Array<Tag>> => {

  const response = await api.get<Array<CourseServer>>('/courses.json');
  
  const serverTags = getTagsFromCourses(response.data);

  const tags = ResponseDto(serverTags);

  return tags;
};
