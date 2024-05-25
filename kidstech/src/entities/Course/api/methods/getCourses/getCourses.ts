import { api } from '@/shared/api';

import { Course } from '../../../model/types/course.entity';
import { CourseServer } from '../../types/course.server';
import { RequestDto } from './request.dto';
import { ResponseDto } from './response.dto';
import { Request } from './types';

export const getCourses = async (request?: Request): Promise<Array<Course>> => {
  const { tag } = RequestDto(request);

  const response = await api.get<Array<CourseServer>>('/courses.json');

  const filterResponse = response.data.filter(item => {
    if(!tag) {
      return true;
    }

    return item.tags.includes(tag);
  })

  const courses = ResponseDto(filterResponse);

  return courses;
};
