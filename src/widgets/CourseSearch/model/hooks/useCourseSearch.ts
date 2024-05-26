import { useCallback, useState } from 'react';

import { allThemesTagId } from '@/entities/Course';
import { getQueryParams } from '@/shared/lib/url/getQueryParams';

const search = window.location.search;
const params = new URLSearchParams(search);

export const useCourseSearch = () => {
  const [selectedTagId, setSelectedTagId] = useState(params.get('tag') || allThemesTagId);

  const setSelectedTagIdHandler = useCallback((tagId: string) => {
    setSelectedTagId(tagId);

    window.history.pushState(null, '', `?${getQueryParams({ tag: tagId })}`);
  }, []);

  return {
    selectedTagId,
    setSelectedTagId: setSelectedTagIdHandler
  };
};
