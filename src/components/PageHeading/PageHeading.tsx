import './PageHeading.css';

interface PageHeadingProps {
  headingText: string;
  subHeadingText: string;
  headingLineColour: string;
}

const PageHeading = (props: PageHeadingProps) => {
  return (
    <div className='page-heading-container'>
      <div className='main-heading'>
        {props.headingText}{' '}
        <span style={{ color: '#3fe2ba' }}>({props.subHeadingText})</span>
      </div>
      <div
        className='page-heading-underline'
        style={{ borderBottom: `2px solid ${props.headingLineColour}` }}
      ></div>
    </div>
  );
};

export default PageHeading;
