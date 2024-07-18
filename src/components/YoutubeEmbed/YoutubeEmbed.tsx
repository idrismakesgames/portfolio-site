import './YoutubeEmbed.css';

interface YoutubeEmbedProps {
  embedUrl: string;
  videoTitle: string;
}

const YoutubeEmbed = ({ embedUrl, videoTitle }: YoutubeEmbedProps) => (
  <div className='youtube-video'>
    <iframe
      width='420'
      height='237'
      src={`https://www.youtube.com/embed/${embedUrl}?autoplay=0&showinfo=0&controls=0`}
      allowFullScreen
      title={videoTitle}
    />
  </div>
);

export default YoutubeEmbed;
