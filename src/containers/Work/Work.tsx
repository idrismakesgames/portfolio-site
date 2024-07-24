import PageHeading from '../../components/PageHeading/PageHeading';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store.ts';
import './Work.css';
import { FC, useState } from 'react';
import PageContentLinks from '../../components/PageContentLinks/PageContentLinks.tsx';
import PageContent from '../../components/PageContent/PageContent.tsx';

const Work: FC = () => {
  const [titleSelected, setTitleSelected] = useState(0);
  const work = useSelector((state: RootState) => state.home.work);
  return (
    <div className="work-container">
      <PageHeading
        headingText="Work"
        subHeadingText="Recent Roles"
        headingLineColour="#3fe2ba"
      />
      <PageContentLinks
        linkContent={work}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
      <PageContent
        linkContent={work}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
    </div>
  );
};

export default Work;
