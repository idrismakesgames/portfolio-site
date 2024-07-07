import './Links.css';
import { FC } from 'react';
import GitbhubIcon from '../../../assets/icons/github.svg?react';
import CVIcon from '../../../assets/icons/cv.svg?react';

const Links: FC = () => {
  return (
    <div className='links-container'>
      <div className='text'>Check out my Github and CV</div>
      <div className='links'>
        <a
          href='https://github.com/idrismakesgames'
          target='_blank'
          className='icon-container'
          style={{ border: '3px solid #a385ff' }}
        >
          <GitbhubIcon width={35} />
        </a>
        <a
          href='https://drive.google.com/file/d/1kUbbrBbzL5HHsMytljvk7Je9LDVeuFUS/view?usp=drive_link'
          target='_blank'
          className='icon-container'
          style={{ border: '3px solid #f8e186' }}
        >
          <CVIcon width={30} />
        </a>
      </div>
    </div>
  );
};

export default Links;
