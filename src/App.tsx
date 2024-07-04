import './App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store.ts';
import * as homeSliceActions from './state/home/homeSlice.ts';
import { FC, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import HomePage from './containers/HomePage/HomePage.tsx';
import Work from './containers/Work/Work.tsx';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(homeSliceActions.loadPages());
    dispatch(homeSliceActions.loadSkills());
    dispatch(homeSliceActions.loadExperience());
    dispatch(homeSliceActions.loadWork());
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
