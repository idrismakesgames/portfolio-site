import './HomePage.css';
import { FC } from 'react';
import TitleHeading from '../../components/TitleHeading/TitleHeading.tsx';
import PicutreBlurb from './PictureBlurb/PictureBlurb.tsx';
import Links from './Links/Links.tsx';
import Skills from './Skills/Skills.tsx';
import Experience from './Experience/Experience.tsx';

const HomePage: FC = () => {
  return (
    <div className="home-content">
      <TitleHeading
        headingText="Lead Frontend Developer"
        headingLineColour="#f1a17e"
      />
      <PicutreBlurb />
      <Links />
      <TitleHeading
        headingText="Skills and Experience"
        headingLineColour="#3fe2ba"
      />
      <Skills />
      <Experience />
    </div>
  );
};

export default HomePage;
