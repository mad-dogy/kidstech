import { useEffect, useState } from "react";

import { Course, CourseController, Tag } from "@/entities/Course";

export const useCourseList = (selectedTag?: Tag) => {
  const [courses, setCourses] = useState<Course[]>();

  useEffect(() => {
    async function getCourses() {
      const courses = await CourseController.getCourses({ tag: selectedTag });

      setCourses(courses);
    }

    getCourses();
  }, []);

  return {
    courses
  };
}