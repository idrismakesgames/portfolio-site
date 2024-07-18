import './PageHeading.css';

interface PageHeadingProps {
  headingText: string;
  subHeadingText: string;
  headingLineColour: string;
}

const PageHeading = ({
  headingText,
  subHeadingText,
  headingLineColour,
}: PageHeadingProps) => {
  return (
    <div className='page-heading-container'>
      <div className='main-heading'>
        {headingText}{' '}
        <span style={{ color: headingLineColour }}>({subHeadingText})</span>
      </div>
      <div
        className='page-heading-underline'
        style={{ borderBottom: `2px solid ${headingLineColour}` }}
      ></div>
    </div>
  );
};

export default PageHeading;
