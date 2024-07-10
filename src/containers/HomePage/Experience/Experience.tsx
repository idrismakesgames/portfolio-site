import './Experience.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store.ts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FC } from 'react';

const Experience: FC = () => {
  const experience = useSelector((state: RootState) => state.home.experience);
  return (
    <div className='experience-container'>
      {experience !== null &&
        experience.map((el, i) => (
          <div
            key={i}
            className='experience-row'
            style={{ flexDirection: i % 2 == 0 ? 'row' : 'row-reverse' }}
          >
            <div className='left-image'>
              <LazyLoadImage
                src={el.experienceLogo}
                style={{ width: el.imageWidth }}
              />
            </div>
            <div className='right-experience'>
              <div className='experience-text'>{el.experienceDesc}</div>
              <div
                className='experience-date'
                style={{ color: el.experienceColour }}
              >
                {el.experienceYear}
              </div>
            </div>
          </div>
        ))}
      <div className='more-experience'>
        + More job history and details in my CV linked above
      </div>
    </div>
  );
};

export default Experience;
