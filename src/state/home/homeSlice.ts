import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState, MenuPages } from './homeSlice.types.ts';
import pagesJSON from '../../assets/mockData/pages.json';
import { buildPages } from '../stateMethods/buildPages.ts';

const initialState: HomeState = {
  menuPages: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setDifficulty: () => {
      console.log('test');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadPages.fulfilled,
      (state, action: PayloadAction<MenuPages[]>) => {
        state.menuPages = action.payload;
      }
    );
  },
});

export const loadPages = createAsyncThunk('home/loadPages', async () => {
  return buildPages(JSON.stringify(pagesJSON));
});

export const { setDifficulty } = homeSlice.actions;

export default homeSlice.reducer;
