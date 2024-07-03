import './Skills.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store.ts';
import { FC } from 'react';

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.home.skills);

  return (
    <>
      {skills !== null &&
        skills.map((el, i) => (
          <div key={i} className='skills-row'>
            {el.map((childEl, j) => (
              <div
                key={j}
                className='outer-skill'
                style={{ border: '2px solid ' + childEl.skillColour }}
              >
                <div className='inner-skill'>
                  <div className='skill'>
                    <div className='skill-top'>{childEl.skillName}</div>
                    <div className='skill-bottom'>{childEl.skill2Name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default Skills;
