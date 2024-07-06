import './ProjectLinks.css';
import GitbhubIcon from '../../../assets/icons/projects/github.svg?react';
import FigmaIcon from '../../../assets/icons/projects/figma.svg?react';
import PlayIcon from '../../../assets/icons/projects/play.svg?react';
import { Project } from '../../../state/home/homeSlice.types';

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = (props: ProjectLinksProps) => {
  return (
    <div className='page-content-links-container'>
      <div className={'link-parent'}>
        <a
          href={props.project.links[0].link}
          target='_blank'
          className='icon-container'
          style={{ border: '3px solid #f1a17e' }}
        >
          <GitbhubIcon width={40} />
        </a>
        Code
      </div>
      <div className={'link-parent'}>
        <a
          href={props.project.links[1].link}
          target='_blank'
          className='icon-container'
          style={{ border: '3px solid #a385ff' }}
        >
          <FigmaIcon width={40} />
        </a>
        Design
      </div>
      <div className={'link-parent'}>
        <a
          href={props.project.links[2].link}
          target='_blank'
          className='icon-container'
          style={{ border: '3px solid #3fe2ba' }}
        >
          <PlayIcon width={40} />
        </a>
        Launch
      </div>
    </div>
  );
};

export default ProjectLinks;
