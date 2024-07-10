import './PageContent.css';
import { Work, Projects } from '../../state/home/homeSlice.types.ts';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ProjectLinks from './ProjectLinks/ProjectLinks.tsx';

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
                <LazyLoadImage src={project.projectImages[0]} />
                <LazyLoadImage src={project.projectImages[1]} />
              </div>
              <div className='page-content-paragraph'>
                {project.projectParagraphs[1]}
              </div>

              {/* Project Links if this is project not a work entry */}
              {project.links.length > 0 && <ProjectLinks project={project} />}

              {/* Project details if this is project not a work entry */}
              {project.links.length > 0 && (
                <>
                  <div className='project-details-heading'>
                    Technical Details
                  </div>
                  {project.links.length > 0 &&
                    project.details.map((det) => (
                      <div className='project-details'>{det}</div>
                    ))}
                </>
              )}
            </div>
          )
        )}
    </div>
  );
};

export default PageContent;
