import { useEffect, useState } from 'react';

import { CourseController, Tag } from '@/entities/Course';

export const useTagsList = () => {
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    async function getTags() {
      const tags = await CourseController.getTags();

      setTags(tags);
    }

    getTags();
  }, []);

  return {
    tags
  };
};
