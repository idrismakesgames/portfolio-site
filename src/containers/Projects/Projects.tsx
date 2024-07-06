import PageHeading from '../../components/PageHeading/PageHeading.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store.ts';
import './Projects.css';
import { FC, useState } from 'react';
import PageContentLinks from '../../components/PageContentLinks/PageContentLinks.tsx';
import PageContent from '../../components/PageContent/PageContent.tsx';

const Projects: FC = () => {
  const [titleSelected, setTitleSelected] = useState(0);
  const projects = useSelector((state: RootState) => state.home.projects);
  return (
    <div className='projects-container'>
      <PageHeading
        headingText='Projects'
        subHeadingText='My Process'
        headingLineColour='#47c2ff'
      />
      <div className='projects-paragraph'>
        Alongside this portfolio site, I have created a game with Typescript and
        React to show my process from design to code. Please check out my github
        on both.
      </div>
      <PageContentLinks
        linkContent={projects}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
      <PageContent
        linkContent={projects}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
    </div>
  );
};

export default Projects;
