import { api } from '@/shared/api';

import { getCoursesByTag } from '../../helpers/getCoursesByTag';
import { allThemesTagId } from '../../../model/constants/tags';
import { Course } from '../../../model/types/course.entity';
import { CourseServer } from '../../types/course.server';

import { RequestDto } from './request.dto';
import { ResponseDto } from './response.dto';
import { Request } from './types';

export const getCourses = async (request?: Request): Promise<Array<Course>> => {
  const { tag } = RequestDto(request);

  const response = await api.get<Array<CourseServer>>('/courses.json');

  const skipTagFilter = !tag || tag === allThemesTagId;

  if (skipTagFilter) {
    const courses = ResponseDto(response.data);

    return courses;
  }

  const serverCoursesByTag = getCoursesByTag(response.data, tag);

  const courses = ResponseDto(serverCoursesByTag);

  return courses;
};
