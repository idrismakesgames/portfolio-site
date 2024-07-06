import './PageContentLinks.css';
import { Work, Projects } from '../../state/home/homeSlice.types.ts';
import { Fragment } from 'react/jsx-runtime';

interface PageContentLinksProps {
  linkContent: Work[] | Projects[] | null;
  titleSelected: number;
  setTitleSelected: (index: number) => void;
}

const PageContentLinks = (props: PageContentLinksProps) => {
  return (
    <div className='page-content-link-container'>
      {props.linkContent !== null &&
        props.linkContent.map((el, i) => (
          <Fragment key={i}>
            <div
              className={`page-content-link ${props.titleSelected === i && 'selected'}`}
              onClick={() => props.setTitleSelected(i)}
            >
              {el.titleName}
            </div>
            {props.linkContent !== null &&
              i !== props.linkContent.length - 1 && (
                <div className='page-content-link-seperator'></div>
              )}
          </Fragment>
        ))}
    </div>
  );
};

export default PageContentLinks;
