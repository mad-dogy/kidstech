import { CourseServer, TagServer } from '../types/course.server';

export const getTagsFromCourses = (courses: Array<CourseServer>): Array<TagServer> => {
  const tags: Array<TagServer> = [];

  courses.map((course) => {
    course.tags.map((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  return tags;
};
