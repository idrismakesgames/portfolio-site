import './TitleHeading.css';

interface TitleHeadingProps {
  headingText: string;
  headingLineColour: string;
}

const TitleHeading = (props: TitleHeadingProps) => {
  return (
    <div className='heading-container'>
      <div className='main-heading'>{props.headingText}</div>
      <div
        className='heading-underline'
        style={{ borderBottom: `2px solid ${props.headingLineColour}` }}
      ></div>
    </div>
  );
};

export default TitleHeading;
