import PageHeading from '../../components/PageHeading/PageHeading';
import './Work.css';
import OO1 from '../../assets/images/onlineordering2alt.png';
import OO2 from '../../assets/images/onlineordering1alt.png';
import { FC } from 'react';

const Work: FC = () => {
  return (
    <div className='work-container'>
      <PageHeading
        headingText='Work'
        subHeadingText='Recent Roles'
        headingLineColour='#3fe2ba'
      />

      <div className='companies-container'>
        <div className='company selected'>Kobas</div>
        <div className='company-seperator'></div>
        <div className='company'>Rixxo</div>
        <div className='company-seperator'></div>
        <div className='company'>FelineSoft</div>
      </div>
      <div className='more-details'>+ More roles and details in CV</div>
      <div className='company-work-title'>Online Ordering Platform</div>
      <div className='company-work-paragraph'>
        Designed and developed an online ordering platform for all of our
        clients that launched the day after COVID lockdown ended. £5+ million in
        revenue since launch.
      </div>
      <div className='company-work-images'>
        <img src={OO1} />
        <img src={OO2} />
      </div>
      <div className='company-work-paragraph'>
        Offering To table, Delivery and Collection, Customisable skins for each
        client, and the ability to tie into their stock and inventory systems.
      </div>
    </div>
  );
};

export default Work;
