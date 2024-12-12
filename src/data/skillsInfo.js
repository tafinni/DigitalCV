import SkillBox from '../components/SkillBox';

const programmingSkills = ['C', 'C++', 'Python', 'Bash', 'JavaScript', 'CSS', 'HTML', 'SQL'];
const technologiesSkills = ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Bootstrap', 'VirtualBox', 'WebGL', 'Three.js', 'React', 'React Three Fiber'];
const softSkills = ['Teamwork', 'Problem-solving', 'Creativity', 'Reliability', 'Flexibility', 'Detail-oriented'];
const operatingSystemsSkills = ['Linux', 'Windows', 'macOS'];
const languagesSkills = ['Finnish - Native', 'English - C2'];

export const leftSkillBoxes = [
  <SkillBox title="Programming" skills={programmingSkills} />,
  <SkillBox title="Technologies" skills={technologiesSkills} />,
  <SkillBox title="Soft Skills" skills={softSkills} />,
  <SkillBox title="Operating Systems" skills={operatingSystemsSkills} />,
  <SkillBox title="Languages" skills={languagesSkills} />
];

export const rightSkillBoxes = [''];