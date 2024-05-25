import { CourseServer } from '../types/course.server';
import { Course } from '../../model/types/course.entity';
import { TagDto } from './tag.dto';

export const CourseDto = (courseServer: CourseServer): Course => {
  return {
    id: courseServer.id,
    name: courseServer.name,
    image: courseServer.image,
    bgColor: courseServer.bgColor,
    tags: courseServer.tags.map((tag) => TagDto(tag))
  };
};
