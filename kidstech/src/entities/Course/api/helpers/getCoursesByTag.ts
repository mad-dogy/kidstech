import { CourseServer, TagServer } from "../types/course.server";

export const getCoursesByTag = (
  courses: Array<CourseServer>, 
  selectedTag: TagServer
): Array<CourseServer> => {
  return courses.filter(item => item.tags.includes(selectedTag));
};
