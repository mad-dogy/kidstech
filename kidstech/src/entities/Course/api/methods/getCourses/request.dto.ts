import { Request, RequestServer } from './types';

export const RequestDto = (request?: Request): RequestServer => {
  return {
    tag: request?.tagId
  }
};
