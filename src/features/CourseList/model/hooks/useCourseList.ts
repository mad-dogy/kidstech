import { useEffect, useState } from 'react';

import { Course, CourseController } from '@/entities/Course';
import { getErrorMessage } from '@/shared/lib/error/getErrorMessage';

export const useCourseList = (selectedTagId?: string) => {
  const [courses, setCourses] = useState<Course[]>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function getCourses() {
      try {
        setLoading(true);
        setError(null);

        const courses = await CourseController.getCourses({ tagId: selectedTagId });

        setCourses(courses);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    }

    getCourses();
  }, [selectedTagId]);

  return {
    courses,
    error,
    loading
  };
};
