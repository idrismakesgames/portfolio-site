import './TitleHeading.css';

interface TitleHeadingProps {
  headingText: string;
  headingLineColour: string;
}

const TitleHeading = ({
  headingText,
  headingLineColour,
}: TitleHeadingProps) => {
  return (
    <div className='heading-container'>
      <div className='main-heading'>{headingText}</div>
      <div
        className='heading-underline'
        style={{ borderBottom: `2px solid ${headingLineColour}` }}
      ></div>
    </div>
  );
};

export default TitleHeading;
