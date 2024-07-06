import './PageContent.css';
import { Work, Projects } from '../../state/home/homeSlice.types.ts';

interface PageContentProps {
  linkContent: Work[] | Projects[] | null;
  titleSelected: number;
  setTitleSelected: (index: number) => void;
}

const PageContent = (props: PageContentProps) => {
  return (
    <div className='page-content-container'>
      {props.linkContent !== null &&
        props.linkContent[props.titleSelected].projects.map(
          (project, i: number) => (
            <div key={i} className='page-content-entry'>
              <div className='page-content-title'>{project.projectName}</div>
              <div className='page-content-paragraph'>
                {project.projectParagraphs[0]}
              </div>
              <div
                className={`${i % 2 === 0 ? 'page-content-images' : 'page-content-images-reverse'}`}
              >
                <img src={project.projectImages[0]} />
                <img src={project.projectImages[1]} />
              </div>
              <div className='page-content-paragraph'>
                {project.projectParagraphs[1]}
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default PageContent;
