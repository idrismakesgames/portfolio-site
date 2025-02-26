import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Experience,
  HomeState,
  MenuPages,
  Projects,
  Skills,
  Work,
  ShowcaseItem,
} from './homeSlice.types.ts';
import pagesJSON from '../../assets/mockData/pages.json';
import skillsJSON from '../../assets/mockData/skills.json';
import experienceJSON from '../../assets/mockData/experience.json';
import workJSON from '../../assets/mockData/work.json';
import projectsJSON from '../../assets/mockData/projects.json';
import showcaseJSPM from '../../assets/mockData/sprinterShowcase.json';
import {
  buildExperience,
  buildPages,
  buildSkills,
  buildWork,
  buildProjects,
  buildShowcaseItems,
} from '../stateMethods/buildData.ts';

const initialState: HomeState = {
  menuPages: null,
  skills: null,
  experience: null,
  work: null,
  projects: null,
  sprinterShowcaseItems: null,
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
    builder.addCase(
      loadExperience.fulfilled,
      (state, action: PayloadAction<Experience[]>) => {
        state.experience = action.payload;
      }
    );
    builder.addCase(
      loadWork.fulfilled,
      (state, action: PayloadAction<Work[]>) => {
        state.work = action.payload;
      }
    );
    builder.addCase(
      loadProjects.fulfilled,
      (state, action: PayloadAction<Projects[]>) => {
        state.projects = action.payload;
      }
    );
    builder.addCase(
      loadShowcaseItems.fulfilled,
      (state, action: PayloadAction<ShowcaseItem[]>) => {
        state.sprinterShowcaseItems = action.payload;
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

export const loadExperience = createAsyncThunk(
  'home/loadExperience',
  async () => {
    return buildExperience(JSON.stringify(experienceJSON));
  }
);

export const loadWork = createAsyncThunk('home/loadWork', async () => {
  return buildWork(JSON.stringify(workJSON));
});

export const loadProjects = createAsyncThunk('home/loadProjects', async () => {
  return buildProjects(JSON.stringify(projectsJSON));
});

export const loadShowcaseItems = createAsyncThunk(
  'home/loadShowcaseItems',
  async () => {
    return buildShowcaseItems(JSON.stringify(showcaseJSPM));
  }
);

export const { setDifficulty } = homeSlice.actions;

export default homeSlice.reducer;
