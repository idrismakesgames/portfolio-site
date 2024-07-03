import './App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store.ts';
import * as homeSliceActions from './state/home/homeSlice.ts';
import { FC, useEffect } from 'react';
import Header from './containers/Header/Header';
import TitleHeading from './components/TitleHeading/TitleHeading.tsx';
import IdrisPicture from './assets/images/IdrisPicture.jpg';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(homeSliceActions.loadPages());
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <TitleHeading
          headingText='Senior Frontend Developer'
          headingLineColour='#f1a17e'
        />
        <div className='profile-picture'>
          <img src={IdrisPicture} />
        </div>
      </div>
    </div>
  );
};

export default App;
