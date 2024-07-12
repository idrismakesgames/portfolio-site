import './ShowcaseItem.css';
import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed.tsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ShowcaseItemProps {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  mediaType: 'image' | 'video';
  mediaLink: string;
  mediaTitle: string;
}

const ShowcaseItem = (props: ShowcaseItemProps) => {
  return (
    <>
      <div className='sprinter-heading'>{props.heading}</div>
      <div className='sprinter-paragraph'>{props.paragraphOne}</div>
      {props.mediaType === 'video' && (
        <YoutubeEmbed
          embedUrl={props.mediaLink}
          videoTitle={props.mediaTitle}
        />
      )}
      {props.mediaType === 'image' && (
        <div className='sprinter-image'>
          <img src={props.mediaLink} alt={props.mediaTitle} />
        </div>
      )}

      <div className='sprinter-paragraph'>{props.paragraphTwo}</div>
    </>
  );
};

export default ShowcaseItem;
