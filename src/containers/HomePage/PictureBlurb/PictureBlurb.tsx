import './PictureBlurb.css';
import { FC } from 'react';
import IdrisPicture from '../../../assets/images/IdrisPicture.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PicutreBlurb: FC = () => {
  return (
    <div className='picture-blurb'>
      <div className='profile-picture'>
        <img src={IdrisPicture} />
      </div>
      <div className='subheadings-container'>
        <div className='left-subheading'>
          <div className='top-subheading'>Skilled</div>
          <div className='middle-subheading'>Developer</div>
          <div className='bottom-subheading'>+ Designer</div>
        </div>
        <div className='right-subheading'>
          <div className='years-experience-top'>
            <div className='years-number'>14</div>
            <div className='years-experience'>
              <div className='years'>Years</div>
              <div className='professional'>Professional</div>
            </div>
          </div>
          <div className='years-experience-bottom'>Experience</div>
        </div>
      </div>
    </div>
  );
};

export default PicutreBlurb;
