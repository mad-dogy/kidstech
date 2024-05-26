import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (error instanceof AxiosError) {
    return error.message;
  }

  if (typeof error?.message === 'string') {
    return error.message;
  }

  if (error?.data) {
    return error.data;
  }

  if (typeof error === 'string') {
    return error;
  }

  return String(error);
};
