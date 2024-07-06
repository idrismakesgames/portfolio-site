import './Sprinter.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store.ts';
import { FC } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading.tsx';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed.tsx';
import ShowcaseItem from './ShowcaseItem/ShowcaseItem.tsx';

const Sprinter: FC = () => {
  const showsaseItems = useSelector(
    (state: RootState) => state.home.sprinterShowcaseItems
  );
  return (
    <div className='sprinter-container'>
      <PageHeading
        headingText='Sprinter'
        subHeadingText='An Illustrated Action Game'
        headingLineColour='#f1a17e'
      />
      <div className='sprinter-paragraph'>
        Welcome to my showcase for Sprinter. A critically acclaimed game I
        created and released for PC, Mac and Linux on{' '}
        <a
          href='https://store.steampowered.com/app/442260/Sprinter/'
          target='_blank'
        >
          Steam
        </a>
        .
      </div>
      <YoutubeEmbed
        embedUrl='e-RfO4t5GSg'
        videoTitle='Sprinter Steam Release Trailer'
      />
      <div className='sprinter-paragraph'>
        The videos below break down elements that went into the game. And at the
        bottom there's some amazing press coverage!
      </div>

      {showsaseItems !== null &&
        showsaseItems.map((showcaseItem) => <ShowcaseItem {...showcaseItem} />)}
    </div>
  );
};

export default Sprinter;
