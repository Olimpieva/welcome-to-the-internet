import { createAsyncThunk } from '@reduxjs/toolkit';

import { memesApi } from 'api';
import { handleError } from 'utils/axios';

const fetchMemes = createAsyncThunk<
  any,
  undefined,
  {
    rejectValue?: string;
  }
>('menu/fetchMenu', async (_, { rejectWithValue }) => {
  try {
    const { data } = await memesApi.getMemes();

    console.log({ data });

    return data;
  } catch (e) {
    const { axiosError, error } = handleError(e);
    if (axiosError) {
      return rejectWithValue(axiosError.response?.data.errorMessage);
    }
    return rejectWithValue(error?.message);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { fetchMemes };
