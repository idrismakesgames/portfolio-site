import './TitleHeading.css';

interface HeadingProps {
  headingText: string;
  headingLineColour: string;
}

const Heading = (props: HeadingProps) => {
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

export default Heading;
