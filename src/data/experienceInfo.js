import ExperienceBox from "../components/ExperienceBox";
  
const educationInfo = [
    /* Places */      ['Hive Helsinki', 'South-Eastern Finland University of Applied Sciences'], 
    /* Subjects */    [ 'Computer Science', 'Bachelor of Culture and Arts, Graphic Design'],
    /* Times */       [ '2022 - Ongoing', '2016 - 2020'],
    /* Locations */   ['', ''],
    /* Description */ ['']
];

const coursesInfo = [
    /* Places */      ['Three.js Journey', 'Fullstack Open'], 
    /* Subjects */    [ '', ''],
    /* Times */       [ '10/2024 - Ongoing', '11/2024 - Ongoing'],
    /* Locations */   ['', ''],
    /* Description */['']
];

const workInfo = [
    /* Places */      ['Freelance Designer', 'Graphic Design Intern', 'Graphic Design Intern'], 
    /* Subjects */    [ '', '', ''],
    /* Times */       [ '2022 - Ongoing', '09/2019', '04/2018 - 08/2018'],
    /* Locations */   ['', 'Same-Eyes Oy - Kouvola, Finland', 'Idea Design - Hangzhou, China'],
    /* Description */ ['...and other roles, including salesperson, factory worker and pizzeria chef.']
];

export const leftExperienceBoxes = [
    <ExperienceBox title="Education" places={educationInfo[0]} subjects={educationInfo[1]} times={educationInfo[2]} locations={educationInfo[3]} descriptions={educationInfo[4]} />,
    <ExperienceBox title="Courses" places={coursesInfo[0]} subjects={coursesInfo[1]} times={coursesInfo[2]} locations={coursesInfo[3]} descriptions={coursesInfo[4]} />
];

export const rightExperienceBoxes = [
    <ExperienceBox title="Work" places={workInfo[0]} subjects={workInfo[1]} times={workInfo[2]} locations={workInfo[3]} description={workInfo[4]} />
];