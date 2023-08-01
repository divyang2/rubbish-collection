import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../../API/api';

export const initialState = {
  loading: false,
  collectionLoading: false,
  addressDataList: [],
  collectionsList: [],
  error: '',
};

//get address list api
export const getAddressData = createAsyncThunk('getAddressData', async (data, { rejectWithValue }) => {
  try {
    const response = await postApi('address', data);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.message || 'Error');
  }
});

//get collection list api
export const getCollectionData = createAsyncThunk('getCollectionData', async (data, { rejectWithValue }) => {
  try {
    const response = await postApi('collectionDay', data);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.message || 'Error');
  }
});

//clear all field data from redux
export const clearReduxStore = createAsyncThunk('clearReduxStore', async (data, { rejectWithValue }) => {
  try {
    return data;
  } catch (err) {
    return rejectWithValue(err.message || 'Error');
  }
});

export const clearCollectionDay = createAsyncThunk('clearCollectionDay', async (data, { rejectWithValue }) => {
  try {
    return data;
  } catch (err) {
    return rejectWithValue(err.message || 'Error');
  }
});
export const collectionSlice = createSlice({
  name: 'collectionSlice',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddressData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddressData.fulfilled, (state, action) => {
        state.loading = false;
        state.addressDataList = action.payload;
      })
      .addCase(getAddressData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCollectionData.pending, (state) => {
        state.collectionLoading = true;
      })
      .addCase(getCollectionData.fulfilled, (state, action) => {
        state.collectionLoading = false;
        state.collectionsList = action.payload;
      })
      .addCase(getCollectionData.rejected, (state, action) => {
        state.error = action.payload;
        state.collectionLoading = false;
      })
      .addCase(clearReduxStore.fulfilled, (state, action) => {
        state.addressDataList = action.payload;
        state.collectionsList = action.payload;
      })
      .addCase(clearCollectionDay.fulfilled, (state, action) => {
        state.collectionsList = action.payload;
      });
  },
});

export const { showLoading } = collectionSlice.actions;

export default collectionSlice.reducer;
