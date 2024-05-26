import { api } from '@/shared/api';

import { Tag } from '../../../model/types/course.entity';
import { CourseServer, TagServer } from '../../types/course.server';
import { ResponseDto } from './response.dto';
import { Request } from './types';

export const getTags = async (request?: Request): Promise<Array<Tag>> => {

  const response = await api.get<Array<CourseServer>>('/courses.json');
  
  const tagsFromServer: Array<TagServer> = [];

  response.data.map((course) => {
    course.tags.map((tag) => {
      if(!tagsFromServer.includes(tag)) {
        tagsFromServer.push(tag);
      }
    })
  });

  const tags = ResponseDto(tagsFromServer);

  return tags;
};
