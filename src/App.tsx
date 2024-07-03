import './App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store.ts';
import * as homeSliceActions from './state/home/homeSlice.ts';
import { FC, useEffect } from 'react';
import Header from './components/Header/Header';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(homeSliceActions.loadPages());
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <div style={{ padding: '0 10px', height: '2000px' }}>
        testing height and length of this shit
      </div>
    </div>
  );
};

export default App;
