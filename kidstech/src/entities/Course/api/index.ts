import { getCourses as getCoursesMethod } from "./methods/getCourses/getCourses";
import { getTags as getTagsMethod } from "./methods/getTags/getTags";

export module CourseController {
  export const getCourses = getCoursesMethod;
  export const getTags = getTagsMethod;
}
