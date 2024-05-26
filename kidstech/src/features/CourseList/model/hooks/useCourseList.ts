import { useEffect, useState } from "react";

import { Course, CourseController } from "@/entities/Course";

export const useCourseList = (selectedTagId?: string) => {
  const [courses, setCourses] = useState<Course[]>();

  useEffect(() => {
    async function getCourses() {
      const courses = await CourseController.getCourses({ tagId: selectedTagId });

      setCourses(courses);
    }

    getCourses();
  }, [selectedTagId]);

  return {
    courses
  };
}