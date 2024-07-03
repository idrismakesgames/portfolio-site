import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState, MenuPages, Skills } from './homeSlice.types.ts';
import pagesJSON from '../../assets/mockData/pages.json';
import skillsJSON from '../../assets/mockData/skills.json';
import { buildPages, buildSkills } from '../stateMethods/buildPages.ts';

const initialState: HomeState = {
  menuPages: null,
  skills: null,
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
    builder.addCase(
      loadSkills.fulfilled,
      (state, action: PayloadAction<Skills[][]>) => {
        state.skills = action.payload;
      }
    );
  },
});

export const loadPages = createAsyncThunk('home/loadPages', async () => {
  return buildPages(JSON.stringify(pagesJSON));
});

export const loadSkills = createAsyncThunk('home/loadSkills', async () => {
  return buildSkills(JSON.stringify(skillsJSON));
});

export const { setDifficulty } = homeSlice.actions;

export default homeSlice.reducer;
