import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import pf from '../public/pf.png';
import rocket from '../public/rocket.png';
import astronaut from '../public/astronaut.png';
import SectionBox from './components/SectionBox';
import { leftSkillBoxes, rightSkillBoxes } from './data/skillsInfo.js'
import { leftExperienceBoxes, rightExperienceBoxes } from './data/experienceInfo.js';
import { leftProjectBoxes, rightProjectBoxes } from './data/projectsInfo.js';


export default function Embed() {
  return (
    <div className="htmlScreenVertical h-screen w-full overflow-hidden bg-white">
      <div className="overflow-y-auto h-full">

        <div className="p-5 text-white font-sans">
          <div className="text-center p-10 py-10">

            {/* Title */}
            <div   className="outline outline-solid outline-titleBlue bg-titleBlue text-center pb-5 px-5 mx-auto max-w-lg"
              style={{ outlineWidth: '8px' }}>
              <h1 className="text-white text-6xl py-2 font-medium font-Cherry tracking-wide md:text-9xl">
                Taru Finni
              </h1>
            </div>

            {/* Background box */}
            <div className="outline outline-solid outline-titleBlue bg-pink0 text-center px-5 ml-10 mr-10"
              style={{ outlineWidth: '8px'}}>

              <div   className="shadow-xl shadow-titleBlue outline outline-solid outline-titleBlue bg-white text-center pb-5 px-5 mx-auto max-w-lg"
                style={{ outlineWidth: '8px' }}>
                <h2 className="pt-7 text-3xl py-2 text-titleBlue md:text-5xl">
                  Developer & Designer
                </h2>
              </div>

              {/* Profile picture */}
              <div className="outline outline-solid outline-titleBlue mx-auto bg-titleBlue from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96"
              style={{ outlineWidth: '8px' }}>
                <img src={pf} alt="Profile" className="object-cover w-full h-full" />
              </div>

              {/* Introduction */}
              <p className="text-md py-10 leading-8 text-titleBlue max-w-xl mx-auto md:text-3xl">
                Motivated and versatile software developer with a background in graphic design.
              </p>

              {/* Link box */}
              <div className="outline outline-solid outline-titleBlue bg-white text-center pb-0 px-5 mb-0 mx-auto max-w-lg"
                style={{ outlineWidth: '8px' }}>
                <div className="mt-4 text-5xl flex justify-center gap-16 py-5 mb-0 text-titleBlue">
                  <a href="https://www.github.com/tafinni" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/tafinni" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/firuyee" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-t-8 border-solid border-titleBlue m-10 mt-20" />
            
            <SectionBox title="Skills" color='#C1DFBF' leftColumn={leftSkillBoxes} rightColumn={rightSkillBoxes} lgImgSrc={rocket} imgAlt={rocket} />

            <hr className="border-t-8 border-solid border-titleBlue m-10 mt-20" />

            <SectionBox title="Experience" color='#9FD8F6' leftColumn={leftExperienceBoxes} rightColumn={rightExperienceBoxes} smImgSrc={astronaut} imgAlt={astronaut} />
           
            <hr className="border-t-8 border-solid border-titleBlue m-10 mt-20" />

            <SectionBox title="Projects" link='https://github.com/tafinni' linkDescription="These, and more projects available in my GitHub" color='#F8F1C4' leftColumn={leftProjectBoxes} rightColumn={rightProjectBoxes} />

          </div>
        </div>
      </div>
    </div>
  );
}
