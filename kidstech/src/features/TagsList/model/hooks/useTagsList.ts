import { useEffect, useState } from 'react';

import { CourseController, Tag } from '@/entities/Course';
import { getErrorMessage } from '@/shared/lib/error/getErrorMessage';

export const useTagsList = () => {
  const [tags, setTags] = useState<Tag[]>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function getTags() {
      try {
        setError(null);
        setLoading(true);
        const tags = await CourseController.getTags();

        setTags(tags);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    }

    getTags();
  }, []);

  return {
    tags,
    loading,
    error
  };
};
