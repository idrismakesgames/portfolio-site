import './Skills.css';
import { Skills as SkillsType } from '../../state/home/homeSlice.types.ts';

const Skills = (props: { skills: SkillsType[][] | null }) => {
  return (
    <>
      {props.skills !== null &&
        props.skills.map((el) => (
          <div className='skills-row'>
            {el.map((childEl) => (
              <div
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
