import PageHeading from '../../components/PageHeading/PageHeading';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store.ts';
import './Work.css';
import { FC, useState } from 'react';
import { Project } from '../../state/home/homeSlice.types.ts';

const Work: FC = () => {
  const [companySelected, setCompanySelected] = useState(0);
  const work = useSelector((state: RootState) => state.home.work);
  return (
    <div className='work-container'>
      <PageHeading
        headingText='Work'
        subHeadingText='Recent Roles'
        headingLineColour='#3fe2ba'
      />
      <div className='companies-container'>
        {work !== null &&
          work.map((el, i) => (
            <>
              <div
                className={`company ${companySelected === i && 'selected'}`}
                onClick={() => setCompanySelected(i)}
              >
                {el.companyName}
              </div>
              {i !== work.length - 1 && (
                <div className='company-seperator'></div>
              )}
            </>
          ))}
      </div>
      <div className='more-details'>+ More roles and details in CV</div>

      <div className='company-work-container'>
        {work !== null &&
          work[companySelected].projects.map((project: Project, i: number) => (
            <div className='company-work-entry'>
              <div className='company-work-title'>{project.projectName}</div>
              <div className='company-work-paragraph'>
                {project.projectParagraphs[0]}
              </div>
              <div
                className={`${i % 2 === 0 ? 'company-work-images' : 'company-work-images-reverse'}`}
              >
                <img src={project.projectImages[0]} />
                <img src={project.projectImages[1]} />
              </div>
              <div className='company-work-paragraph'>
                {project.projectParagraphs[1]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Work;
