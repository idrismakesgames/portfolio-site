import './ShowcaseItem.css';
import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed.tsx';

interface ShowcaseItemProps {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  mediaType: 'image' | 'video';
  mediaLink: string;
  mediaTitle: string;
}

const ShowcaseItem = ({
  heading,
  paragraphOne,
  paragraphTwo,
  mediaType,
  mediaLink,
  mediaTitle,
}: ShowcaseItemProps) => {
  return (
    <>
      <div className='sprinter-heading'>{heading}</div>
      <div className='sprinter-paragraph'>{paragraphOne}</div>
      {mediaType === 'video' && (
        <YoutubeEmbed embedUrl={mediaLink} videoTitle={mediaTitle} />
      )}
      {mediaType === 'image' && (
        <div className='sprinter-image'>
          <img src={mediaLink} alt={mediaTitle} />
        </div>
      )}

      <div className='sprinter-paragraph'>{paragraphTwo}</div>
    </>
  );
};

export default ShowcaseItem;
