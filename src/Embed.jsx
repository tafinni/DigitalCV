import { FaGithub, FaLinkedin, FaInstagram, FaLink } from 'react-icons/fa6';
import pf from '../public/pf.png';
import rocket from '../public/rocket.png';
import astronaut from '../public/astronaut.png';

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
                <img src={pf} alt="Profile" className="object-cover w-full h-full scale-125" />
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
            
            {/* Skills */}
            <div className="outline outline-solid outline-titleBlue mt-20 ml-10 mr-10 mb-2"
             style={{ outlineWidth: '8px' }}>
              <h3 className="text-titleBlue">
                Skills
              </h3>
            </div>

            <div className="outline outline-solid outline-titleBlue max-w-7xl mx-auto my-1 p-6 pr-0 pb-0 pt-0 bg-green0 ml-10 mr-10"
              style={{ outlineWidth: '8px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl text-left">

                {/* Left Column*/}
                <div className="flex flex-col space-y-8 h-full pb-6 pr-6">
                  
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                  style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Programming</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      C
                      <br />
                      C++
                      <br />
                      Python
                      <br />
                      Bash
                      <br />
                      JavaScript
                      <br />
                      CSS
                      <br />
                      HTML
                      <br />
                      SQL
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                    style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Technologies</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      Docker
                      <br />
                      Docker Compose
                      <br />
                      Git
                      <br />
                      GitHub
                      <br />
                      Bootstrap
                      <br />
                      VirtualBox
                      <br />
                      WebGL
                      <br />
                      Three.js
                      <br />
                      React
                      <br />
                      React Three Fiber
                    </p>
                  </div>

                  {/* Soft Skills */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                    style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Soft Skills</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      Teamwork
                      <br />
                      Problem-solving
                      <br />
                      Creativity
                      <br />
                      Reliability
                      <br />
                      Flexibility
                      <br />
                      Detail-Oriented
                    </p>
                  </div>

                  {/* Concepts */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                    style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Concepts</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      API Integration
                      <br />
                      Version Control
                      <br />
                      Memory management
                    </p>
                  </div>

                  {/* Operating Systems */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                  style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Operating Systems</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      Linux
                      <br />
                      Windows
                      <br />
                      macOS
                    </p>
                  </div>

                  {/* Languages */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                    style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Languages</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />
                    <p className="columns-2 gap-4">
                      Finnish - Native
                      <br />
                      English - C2
                    </p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="outline outline-solid outline-titleBlue bg-titleBlue flex justify-center items-center h-full overflow-hidden w-full"
                  style={{ outlineWidth: '8px' }}>
                  <img
                    src={rocket}
                    alt="Rocket"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <hr className="border-t-8 border-solid border-titleBlue m-10 mt-20" />
            
            {/* Experience */}
            <div className="outline outline-solid outline-titleBlue mt-20 ml-10 mr-10 mb-2"
             style={{ outlineWidth: '8px' }}>
              <h3 className="text-titleBlue">
                Experience
              </h3>
            </div>

            <div className="outline outline-solid outline-titleBlue max-w-7xl mx-auto my-1 p-6 pr-0 pb-0 pt-0 bg-lightBlue ml-10 mr-10"
              style={{ outlineWidth: '8px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl text-left">

                {/* Left Column*/}
                <div className="flex flex-col space-y-8 h-full pb-6 mr-6">

                  {/* Education */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                  style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Education</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />

                    <h5 className="font-semibold mb-2 text-center mt-10">Hive Helsinki</h5>
                    <p className='text-center font-semibold'>Computer Science</p>
                    <p className='text-center italic font-roboto'>2022 - Ongoing</p>

                    <h5 className="font-semibold mb-2 text-center mt-10 leading-tight">South-Eastern Finland University of Applied Sciences</h5>
                    <p className='text-center font-semibold'>Bachelor of Culture and Arts,</p>
                    <p className='text-center font-semibold'>Graphic Design</p>
                    <p className='text-center italic font-roboto pb-3'>2016 - 2020</p>
                  </div>

                  {/* Courses */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                    style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Courses</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />

                    <h5 className="font-semibold mb-2 text-center mt-10">Three.js Journey</h5>
                    <p className='text-center italic font-roboto'>10/2024 - Ongoing</p>

                    <h5 className="font-semibold mb-2 text-center mt-10 leading-tight">Fullstack Open</h5>
                    <p className='text-center italic font-roboto pb-3'>11/2024 - Ongoing</p>
                  </div>
                </div>

                {/* Right Column*/}
                <div className="flex flex-col space-y-8 h-full pb-6 pr-6">

                  {/* Work */}
                  <div className="flex-1 outline outline-solid outline-titleBlue p-6 mt-6 text-titleBlue"
                  style={{ outlineWidth: '8px' }}>
                    <h4 className="font-semibold mb-2 text-center">Work</h4>
                    <hr className="border-t-8 border-solid border-titleBlue my-4" />

                    <h5 className="font-semibold mb-2 text-center mt-7">Freelance designer</h5>
                    <p className='text-center italic font-roboto'>2022 - Ongoing</p>

                    <h5 className="font-semibold mb-2 text-center mt-5 leading-tight">Graphic Design Intern</h5>
                    <p className='text-center italic font-roboto'>09/2019</p>
                    <p className='text-center pb-3'>Same-Eyes Oy - Kouvola, Finland</p>

                    <h5 className="font-semibold mb-2 text-center mt-5 leading-tight">Graphic Design Intern</h5>
                    <p className='text-center italic font-roboto'>04/2018 - 08/2018</p>
                    <p className='text-center pb-3'>Idea Design - Hangzhou, China</p>

                    <p className='text-center italic font-roboto mt-5'>...and other roles, including salesperson, factory worker and pizzeria chef.</p>
                  </div>

                  {/* Image */}
                  <div className="outline outline-solid outline-titleBlue bg-titleBlue flex justify-center items-center h-full overflow-hidden overflow-hidden"
                  style={{ outlineWidth: '8px', maxHeight: '200px' }}>
                    <img
                      src={astronaut}
                      alt="Astronaut"
                      className="overflow-hidden transform scale-150 translate-y-32"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t-8 border-solid border-titleBlue m-10 mt-20" />

            {/* Projects */}
            <div className="outline outline-solid outline-titleBlue mt-20 ml-10 mr-10 mb-2"
              style={{ outlineWidth: '8px' }}>
              <h3 className="text-titleBlue">
                Projects
              </h3>
            </div>

            <div className="outline outline-solid outline-titleBlue max-w-7xl mx-auto my-1 p-6 pr-0 pb-0 pt-0 bg-yellow0 ml-10 mr-10"
              style={{ outlineWidth: '8px' }}>
              <a href="https://github.com/tafinni" target="_blank" rel="noopener noreferrer">
                <h4 className="mb-2 text-center flex items-center justify-center text-titleBlue pt-4">
                  These, and more projects available in my
                  <FaLink className="ml-3"/>
                  GitHub.
                </h4>
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl text-left">

                {/* Left Column*/}
                <div className="flex flex-col space-y-8 h-full pb-6 mr-6">

                  {/* This portfolio */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/DigitalCV " target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          This CV site
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>JavaScript, HTML, CSS, React, Tailwind, Three.js, React Three Fiber, Vercel, Blender</p>
                    <p className='text-center font-semibold font-roboto m-3'>Site for my CV.</p>
                    <p className="m-3 mt-0">
                      Built the site with React to manage components efficiently and used React Three Fiber, 
                      which is a React renderer for Three.js (built on top of WebGL), 
                      to integrate 3D elements modeled with Blender.
                      <br />
                      <br />
                      Better support for mobile in development.
                    </p>
                  </div>

                  {/* Minishell */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/minishell" target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          Minishell
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>
                      C, Bash, Unix, Process management, Signal handling, Memory management, Pipelines, 
                      Input/output redirection, Error handling, Linked lists, Parsing, Enviroment variable management
                    </p>
                    <p className='text-center font-semibold font-roboto m-3'>
                      A simple shell implementation that replicates basic functionalities of an Unix shell.
                    </p>
                    <p className="font-semibold">Functionalities include:</p>
                    <p className="m-3 mt-0">
                      Comman execution with arguments, Built-in commands.</p>
                  </div>

                  {/* ft_irc */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/ft_irc" target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          ft_irc
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>
                      C++, Sockets, Networking, Protocols, Client-Server model, IRC
                    </p>
                    <p className='text-center font-semibold font-roboto m-3'>
                      An real-time chat server built according to IRC protocol.
                    </p>
                    <p className="font-semibold">Functionalities include:</p>
                    <p className="m-3 mt-0">
                      Client registration and log in, Multi-client support, Channel creation and management, 
                      Server-client and client-client communication, Support for IRC commands.
                    </p>
                  </div>
                </div>

                {/* Right Column*/}
                <div className="flex flex-col space-y-8 h-full pb-6 mr-6">

                  {/* ft_transcendence */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/ft_transcendence" target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          ft_transcendence
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>JavaScript, HTML, CSS, Bootstrap, Docker, Nginx, APIs, Web security</p>
                    <p className='text-center font-semibold font-roboto m-3'>An app that hosts a 3D Ping Pong game.</p>
                    <p className="font-semibold">Functionalities include:</p>
                    <p className="m-3 mt-0">
                      Multiplayer, Single player, Responsive design, 
                      User authentication and management, Friends, Game history and more.</p>
                  </div>

                  {/* Cub3D */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/cub3D" target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          Cub3D
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>C, Memory management, Pointers, Structs, Raycasting, Parsing, Graphics</p>
                    <p className='text-center font-semibold font-roboto m-3'>A game imitating old-style Wolfenstein.</p>
                    <p className="m-3 mt-0">
                      Essentially a mini-game engine that handles 3D rendering, player movement and updates real-time minimap.
                      Player can move in the environment with W A S D and look around with right and left arrowkey.
                      </p>
                  </div>

                  {/* Inception */}
                  <div className="flex-1 outline outline-border outline-titleBlue p-6 mt-6 text-titleBlue text-center"
                  style={{ outlineWidth: '8px' }}>
                    <a href="https://github.com/tafinni/Inception" target="_blank" rel="noopener noreferrer">
                      <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2"
                      style={{ outlineWidth: '8px' }}>
                        <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                          Inception
                          <FaLink className="ml-5"/>
                        </h4>
                      </div>
                    </a>
                    <p className='text-center italic font-roboto mt-7'>Docker, Docker compose, Database, SQL, Nginx, Wordpress</p>
                    <p className='text-center font-semibold font-roboto m-3'>A multicontainer Docker environment that launches Wordpress site.</p>
                    <p className="m-3 mt-0">
                      A Docker setup with containers for WordPress, a database, and Nginx, 
                      connected using Docker Compose. Nginx serves the WordPress site securely with HTTPS connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
