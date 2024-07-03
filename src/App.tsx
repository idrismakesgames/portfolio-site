import './App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store.ts';
import * as homeSliceActions from './state/home/homeSlice.ts';
import { FC, useEffect } from 'react';
import Header from './containers/Header/Header';
import TitleHeading from './components/TitleHeading/TitleHeading.tsx';
import PicutreBlurb from './containers/PictureBlurb/PictureBlurb.tsx';
import Links from './containers/Links/Links.tsx';
import Skills from './containers/Skills/Skills.tsx';
import Experience from './containers/Experience/Experience.tsx';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(homeSliceActions.loadPages());
    dispatch(homeSliceActions.loadSkills());
    dispatch(homeSliceActions.loadExperience());
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <TitleHeading
          headingText='Senior Frontend Developer'
          headingLineColour='#f1a17e'
        />
        <PicutreBlurb />
        <Links />
        <TitleHeading
          headingText='Skills and Experience'
          headingLineColour='#3fe2ba'
        />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default App;
