import './PageContentLinks.css';
import { Work, Projects } from '../../state/home/homeSlice.types.ts';
import { Fragment } from 'react/jsx-runtime';

interface PageContentLinksProps {
  linkContent: Work[] | Projects[] | null;
  titleSelected: number;
  setTitleSelected: (index: number) => void;
}

const PageContentLinks = ({
  linkContent,
  titleSelected,
  setTitleSelected,
}: PageContentLinksProps) => {
  return (
    <div className='page-content-link-container'>
      {linkContent !== null &&
        linkContent.map((el, i) => (
          <Fragment key={i}>
            <div
              className={`page-content-link ${titleSelected === i && 'selected'}`}
              onClick={() => setTitleSelected(i)}
            >
              {el.titleName}
            </div>
            {linkContent !== null && i !== linkContent.length - 1 && (
              <div className='page-content-link-seperator'></div>
            )}
          </Fragment>
        ))}
    </div>
  );
};

export default PageContentLinks;
