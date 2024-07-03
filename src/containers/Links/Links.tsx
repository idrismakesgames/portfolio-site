import './Links.css';
import { FC } from 'react';
import GitbhubIcon from '../../assets/icons/github.svg?react';
import CVIcon from '../../assets/icons/cv.svg?react';

const Links: FC = () => {
  return (
    <div className='links-container'>
      <div className='text'>Check out my Github and CV</div>
      <div className='links'>
        <div className='icon-container' style={{ border: '3px solid #a385ff' }}>
          <GitbhubIcon width={35} />
        </div>
        <div className='icon-container' style={{ border: '3px solid #f8e186' }}>
          <CVIcon width={30} />
        </div>
      </div>
    </div>
  );
};

export default Links;
